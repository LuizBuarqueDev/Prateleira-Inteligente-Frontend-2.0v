import { Injectable, resource } from '@angular/core';
import { GenericService } from '@services/generic.service';
import { UserBook } from '@models/user-book.model';
import { first, firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserBookService extends GenericService<UserBook> {
  constructor() {
    super('/user-books');
  }

  readonly userBooksByUserId = resource<UserBook[], string>({
    loader: () => firstValueFrom(this.http.get<UserBook[]>(`${this.url}/by-user-id`)),
    defaultValue: [],
  });
}
