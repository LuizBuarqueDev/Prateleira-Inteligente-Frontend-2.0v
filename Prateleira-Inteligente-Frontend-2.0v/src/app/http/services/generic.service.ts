import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../api.config';

export abstract class GenericService<T> {
  protected http = inject(HttpClient);
  protected baseUrl = API_CONFIG.baseUrl;

  constructor(protected readonly apiUrl: string) {}

  protected get url(): string {
    return `${this.baseUrl}${this.apiUrl}`;
  }

  create(dto: T): Observable<T> {
    return this.http.post<T>(this.url, dto);
  }

  update(id: string, dto: T): Observable<T> {
    return this.http.put<T>(`${this.url}/${id}`, dto);
  }

  getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  getByIds(ids: string[]): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/ids`, {
      params: { ids },
    });
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.url}/count`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
