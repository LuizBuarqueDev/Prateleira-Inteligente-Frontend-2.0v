import { Injectable } from '@angular/core';
import { Author } from '../../shared/models/author.model';
import { GenericService } from './generic.service';

@Injectable({ providedIn: 'root' })
export class AuthorService extends GenericService<Author> {
  constructor() {
    super('/api/authors');
  }
}
