import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { API_CONFIG } from '../api.config';export abstract class GenericService<T> {
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

  getAll() {
    return this.http.get<T[]>(this.url);
  }

  getById(id: string) {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  getByIds(ids: string[]) {
    return this.http.get<T[]>(`${this.url}/ids`, {
      params: { ids }
    });
  }

  count() {
    return this.http.get<number>(`${this.url}/count`);
  }
}