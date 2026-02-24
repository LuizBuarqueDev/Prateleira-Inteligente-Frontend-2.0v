import { Injectable } from '@angular/core';
import { Author } from '@models/author.model';
import { GenericService } from '@services/generic.service';

@Injectable({ providedIn: 'root' })
export class AuthorService extends GenericService<Author> {
  constructor() {
    super('/authors');
  }
}
