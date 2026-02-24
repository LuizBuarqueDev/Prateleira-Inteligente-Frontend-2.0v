import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Book } from '@models/book.model';
import { BookSimplified } from '@models/simplified/book-simplified.model';
import { resourceFromObservable } from './util/signal-resource.util';

@Injectable({ providedIn: 'root' })
export class BookService extends GenericService<Book> {
  constructor() {
    super('/books');
  }

  readonly simplifiedBooks = resourceFromObservable(
    () => this.http.get<BookSimplified[]>(`${this.url}/simplified`),
    [],
  );
}
