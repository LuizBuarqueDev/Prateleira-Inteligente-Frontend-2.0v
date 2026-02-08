import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { GenericService } from './generic.service';

@Injectable({ providedIn: 'root' })
export class UserService extends GenericService<User> {
  constructor() {
    super('/users');
  }
}
