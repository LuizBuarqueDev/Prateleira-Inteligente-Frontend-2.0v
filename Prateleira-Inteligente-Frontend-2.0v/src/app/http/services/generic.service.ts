import { HttpClient } from '@angular/common/http';
import { Signal, inject, resource } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { API_CONFIG } from '../api.config';

export abstract class GenericService<T> {
  protected http = inject(HttpClient);
  protected baseUrl = API_CONFIG.baseUrl;

  constructor(protected readonly apiUrl: string) {}

  protected get url(): string {
    return `${this.baseUrl}${this.apiUrl}`;
  }

  create(dto: T) {
    return this.http.post<T>(this.url, dto);
  }

  update(id: string, dto: T) {
    return this.http.put<T>(`${this.url}/${id}`, dto);
  }

  delete(id: string) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  // HELPER
  protected r<R>(load: () => Promise<R>, defaultValue: R) {
    return resource<R, void>({ loader: load, defaultValue });
  }

  // (Resources)
  readonly all = this.r(() => firstValueFrom(this.http.get<T[]>(this.url)), []);

  readonly total = this.r(() => firstValueFrom(this.http.get<number>(`${this.url}/count`)), 0);

  byId(id: Signal<string>) {
    return this.r(
      () => firstValueFrom(this.http.get<T>(`${this.url}/${id()}`)),
      null as unknown as T
    );
  }

  byIds(ids: Signal<string[]>) {
    return this.r(
      () =>
        firstValueFrom(
          this.http.get<T[]>(`${this.url}/ids`, { params: { ids: ids() } })
        ),
      []
    );
  }
}