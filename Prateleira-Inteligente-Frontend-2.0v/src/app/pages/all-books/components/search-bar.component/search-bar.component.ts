import { Component, model } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule, MatIcon, MatFormFieldModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
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
