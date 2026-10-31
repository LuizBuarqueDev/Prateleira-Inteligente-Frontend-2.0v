import { Component, inject, input, linkedSignal, resource, signal } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { firstValueFrom } from 'rxjs';

import { BookService } from '@services/book.service';
import { BookCardComponent } from './book-card/book-card.component';
import { PageResponse } from '@models/page-response.model';
import { BookSimplified } from '@models/simplified/book-simplified.model';
import { PortuguesePaginatorIntl } from '@app/shared/intl/portuguese-paginator-intl';

@Component({
  selector: 'app-book-card-container',
  standalone: true,
  templateUrl: './book-card-container.component.html',
  styleUrls: ['./book-card-container.component.scss'],
  imports: [BookCardComponent, MatPaginatorModule],
  providers: [{ provide: MatPaginatorIntl, useClass: PortuguesePaginatorIntl }],
})
export class BookCardContainerComponent {
  private readonly bookService = inject(BookService);

  readonly searchTerm = input.required<string>();
  readonly pageSize = signal(10);
  readonly pageIndex = linkedSignal({
    source: this.searchTerm,
    computation: () => 0,
  });

  readonly books = resource({
    params: () => ({
      term: this.searchTerm(),
      page: this.pageIndex(),
      size: this.pageSize(),
    }),

    loader: ({ params }) => firstValueFrom(this.bookService.searchSimplifiedBooks(params)),

    defaultValue: {
      content: [],
      totalElements: 0,
      totalPages: 0,
      size: 10,
      number: 0,
      first: true,
      last: true,
    } satisfies PageResponse<BookSimplified>,
  });

  onPageChange(event: PageEvent): void {
    this.pageIndex.set(event.pageSize === this.pageSize() ? event.pageIndex : 0);
    this.pageSize.set(event.pageSize);
  }
}
