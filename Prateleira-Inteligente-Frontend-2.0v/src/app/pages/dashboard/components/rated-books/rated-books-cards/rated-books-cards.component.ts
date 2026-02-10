import { Component, inject } from '@angular/core';
import { BookService } from '../../../../../http/services/book.service';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rated-books-cards',
  templateUrl: './rated-books-cards.component.html',
  styleUrl: './rated-books-cards.component.scss',
  standalone: true,
  imports: [CommonModule, MatIcon],
})
export class RatedBooksCardsComponent {
  private bookService = inject(BookService);

  books = toSignal(this.bookService.getSimplifiedBooks(), {
    initialValue: [],
  });
}
