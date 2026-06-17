import { Injectable } from '@angular/core';
import { GenericService } from '@services/generic.service';
import { Categories } from '@models/categories.model';

@Injectable({ providedIn: 'root' })
export class CategoryService extends GenericService<Categories> {
  constructor() {
    super('/categories');
  }
}
