import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Book } from '../../shared/models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService extends GenericService<Book> {
  constructor() {
    super('/api/books');
  }
}
