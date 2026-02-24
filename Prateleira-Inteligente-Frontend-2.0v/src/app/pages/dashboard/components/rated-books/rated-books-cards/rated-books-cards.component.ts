import { Component, inject } from '@angular/core';
import { BookService } from '@services/book.service';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-rated-books-cards',
  templateUrl: './rated-books-cards.component.html',
  styleUrl: './rated-books-cards.component.scss',
  standalone: true,
  imports: [CommonModule, MatIcon],
})

export class RatedBooksCardsComponent {
  books = inject(BookService).simplifiedBooks;
}
