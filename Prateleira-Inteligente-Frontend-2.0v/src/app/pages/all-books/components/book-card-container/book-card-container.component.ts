import { Component, effect, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookService } from '@services/book.service';

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

  books = this.bookService.searchSimplifiedBooks;

  constructor() {
    effect(() => {
      this.bookService.setSearchTerm(this.searchTerm());
    });
  }
}
