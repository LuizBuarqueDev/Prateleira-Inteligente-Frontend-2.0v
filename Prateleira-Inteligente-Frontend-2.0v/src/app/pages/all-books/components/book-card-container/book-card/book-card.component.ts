import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { BookSimplified } from '@app/shared/models/simplified/book-simplified.model';

@Component({
  selector: 'app-book-card',
  standalone: true,
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  imports: [CommonModule],
})
export class BookCardComponent {
  book = input<BookSimplified>();
}
