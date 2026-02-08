import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Categories } from '../../shared/models/categories.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends GenericService<Categories> {
  constructor() {
    super('/categories');
  }
}
