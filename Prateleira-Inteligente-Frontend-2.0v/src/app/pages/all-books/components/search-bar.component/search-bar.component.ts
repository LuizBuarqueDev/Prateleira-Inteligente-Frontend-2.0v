import { Component, model } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  template: ` <input type="text" [formControl]="searchControl" placeholder="Buscar livro..." /> `,
})
export class SearchBarComponent {
  search = model<string>('');

  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.search.set(value ?? '');
      });
  }
}
