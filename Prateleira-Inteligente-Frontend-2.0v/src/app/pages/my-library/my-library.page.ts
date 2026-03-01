import { Component } from '@angular/core';
import { LibStatComponent } from './components/lib-stat/lib-stat.component';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.page.html',
  styleUrl: './my-library.page.scss',
  imports: [LibStatComponent],
})
export class MyLibraryComponent {}
