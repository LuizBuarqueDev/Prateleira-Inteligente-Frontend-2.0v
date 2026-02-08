import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { UserBook } from '../../shared/models/user-book.model';

@Injectable({ providedIn: 'root' })
export class UserBookService extends GenericService<UserBook> {
  constructor() {
    super('/user-books');
  }
}
