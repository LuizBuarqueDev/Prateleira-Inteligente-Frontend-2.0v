import { Component, inject } from '@angular/core';
import { BookService } from '../../../../../http/services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rated-books-cards',
  templateUrl: './rated-books-cards.component.html',
  styleUrl: './rated-books-cards.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class RatedBooksCardsComponent {
  books$ = inject(BookService).getSimplifiedBooks();
}
