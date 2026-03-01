import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-lib-stat',
  templateUrl: './lib-stat.component.html',
  styleUrls: ['./lib-stat.component.scss'],
  imports: [MatIcon],
})
export class LibStatComponent {
  totalBooks = input<number>(0);
  totalWithPDF = input<number>(0);
  totalWithoutPDF = input<number>(0);
}
