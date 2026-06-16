import { Injectable } from '@angular/core';
import { GenericService } from '@services/generic.service';
import { UserBook } from '@models/user-book.model';

@Injectable({ providedIn: 'root' })
export class UserBookService extends GenericService<UserBook> {
  constructor() {
    super('/user-books');
  }

  getByUserId() {
    return this.http.get<UserBook[]>(`${this.url}/by-user-id`);
  }
}