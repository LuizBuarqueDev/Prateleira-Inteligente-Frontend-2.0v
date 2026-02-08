import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class GenericService<T> {
  protected http = inject(HttpClient);

  constructor(protected readonly apiUrl: string) {}

  create(dto: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, dto);
  }

  update(id: string, dto: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${id}`, dto);
  }

  getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  getByIds(ids: string[]): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/ids`, {
      params: { ids },
    });
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
