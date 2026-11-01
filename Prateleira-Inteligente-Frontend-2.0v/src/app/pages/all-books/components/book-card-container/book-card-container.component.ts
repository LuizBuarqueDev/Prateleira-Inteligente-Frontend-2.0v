import { Component, inject, input, linkedSignal, signal } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { BookService } from '@services/book.service';
import { BookCardComponent } from './book-card/book-card.component';
import { PageResponse } from '@models/page-response.model';
import { BookSimplified } from '@models/simplified/book-simplified.model';
import { PortuguesePaginatorIntl } from '@app/shared/intl/portuguese-paginator-intl';
import { ResourceStateComponent } from '@app/shared/components/resource-state/resource-state.component';
import { ResourceFactory } from '@services/util/resource-factory.util';

@Component({
  selector: 'app-book-card-container',
  standalone: true,
  templateUrl: './book-card-container.component.html',
  styleUrls: ['./book-card-container.component.scss'],
  imports: [BookCardComponent, MatPaginatorModule, ResourceStateComponent],
  providers: [{ provide: MatPaginatorIntl, useClass: PortuguesePaginatorIntl }],
})
export class BookCardContainerComponent extends ResourceFactory {
  private readonly bookService = inject(BookService);

  readonly searchTerm = input.required<string>();
  readonly pageSize = signal(10);
  readonly pageIndex = linkedSignal({
    source: this.searchTerm,
    computation: () => 0,
  });

  readonly books = this.createParamResource(
    () => ({
      term: this.searchTerm(),
      page: this.pageIndex(),
      size: this.pageSize(),
    }),

    (params) => this.bookService.searchSimplifiedBooks(params),
    {
      content: [],
      totalElements: 0,
      totalPages: 0,
      size: 10,
      number: 0,
      first: true,
      last: true,
    } satisfies PageResponse<BookSimplified>,
  );

  onPageChange(event: PageEvent): void {
    this.pageIndex.set(event.pageSize === this.pageSize() ? event.pageIndex : 0);
    this.pageSize.set(event.pageSize);
  }
}
