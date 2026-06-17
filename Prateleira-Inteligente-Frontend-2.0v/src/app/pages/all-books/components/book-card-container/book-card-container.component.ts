import { Component, inject, input, resource } from '@angular/core';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

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
  private readonly bookService = inject(BookService);

  readonly searchTerm = input.required<string>();

  readonly books = resource({
    params: () => this.searchTerm(),

    loader: ({ params }) =>
      firstValueFrom(
        this.bookService.searchSimplifiedBooks({
          term: params,
          page: 0,
          size: 20,
        }),
      ),

    defaultValue: [],
  });
}
