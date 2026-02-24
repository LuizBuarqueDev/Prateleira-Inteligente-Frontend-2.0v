import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { GenericService } from '@services/generic.service';

@Injectable({ providedIn: 'root' })
export class UserService extends GenericService<User> {
  constructor() {
    super('/users');
  }
}
