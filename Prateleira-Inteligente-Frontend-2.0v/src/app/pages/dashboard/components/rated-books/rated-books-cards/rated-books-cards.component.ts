import { Component, inject, Signal, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ResourceFactory } from '@services/util/resource-factory.util';

import { BookService } from '@services/book.service';

import { BookSimplified } from '@models/simplified/book-simplified.model';
import { PageResponse } from '@models/page-response.model';
import { BookSortField } from '@models/enums/book-sort-field.enum';
import { BookCoverPipe } from '@app/shared/pipes/book-cover.pipe';
import { ResourceStateComponent } from '@app/shared/components/resource-state/resource-state.component';

@Component({
  selector: 'app-rated-books-cards',
  templateUrl: './rated-books-cards.component.html',
  styleUrl: './rated-books-cards.component.scss',
  standalone: true,
  imports: [MatIcon, BookCoverPipe, ResourceStateComponent],
})
export class RatedBooksCardsComponent extends ResourceFactory {
  private readonly bookService = inject(BookService);

  readonly pageParams = signal({
    page: 0,
    size: 5,
    sortBy: BookSortField.TITLE,
    direction: true,
  });

  readonly pagedBooks = this.createParamResource(
    () => this.pageParams(),
    (params) => this.bookService.getPagedBooks(params),
    {
      content: [],
      totalElements: 0,
      totalPages: 0,
      size: 5,
      number: 0,
      first: true,
      last: true,
    } satisfies PageResponse<BookSimplified>,
  );

  updatePage(params: Partial<typeof this.pageParams extends Signal<infer T> ? T : never>) {
    this.pageParams.update((current) => ({
      ...current,
      ...params,
    }));
  }
}
