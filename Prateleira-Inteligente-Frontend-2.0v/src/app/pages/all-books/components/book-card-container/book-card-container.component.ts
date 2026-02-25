import { Component, inject } from '@angular/core';
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
  books = inject(BookService).simplifiedBooks;
}
