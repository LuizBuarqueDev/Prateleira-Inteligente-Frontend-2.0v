import { Component, computed, effect, inject, input } from '@angular/core';
import { BookService } from '@services/book.service';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';

@Component({
  selector: 'app-book-card-container',
  standalone: true,
  templateUrl: './book-card-container.component.html',
  styleUrls: ['./book-card-container.component.scss'],
  imports: [CommonModule, BookCardComponent],
})
export class BookCardContainerComponent {
  private bookService = inject(BookService);

  searchTerm = input.required<string>();

  constructor() {
    effect(() => {
      const term = this.searchTerm();
      console.log('CONTAINER TERM:', term);
      this.bookService.setSearchTerm(term);
    });
  }

  books = this.bookService.searchedSimplifiedBooks;
}
