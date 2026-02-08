import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Book } from '../../shared/models/book.model';
import { Observable } from 'rxjs';
import { BookSimplified } from '../../shared/models/simplified/book-simplified.model';

@Injectable({ providedIn: 'root' })
export class BookService extends GenericService<Book> {
  constructor() {
    super('/books');
  }

  getSimplifiedBooks(): Observable<BookSimplified[]> {
    return this.http.get<BookSimplified[]>(`${this.url}/simplified`);
  }
}
