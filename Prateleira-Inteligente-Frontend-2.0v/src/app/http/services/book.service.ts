import { Injectable, resource, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { GenericService } from '@services/generic.service';

import { Book } from '@models/book.model';
import { BookSimplified } from '@models/simplified/book-simplified.model';

import { SearchParams } from '@models/params/search-params.model';
import { PageResponse } from '@models/page-response.model';
import { BookSortField } from '@models/enums/book-sort-field.enum';

@Injectable({ providedIn: 'root' })
export class BookService extends GenericService<Book> {
  searchParams(): SearchParams {
    throw new Error('Method not implemented.');
  }
  constructor() {
    super('/books');
  }

  private searchTerm = signal('');

  setSearchTerm(term: string) {
    this.searchTerm.set(term);
  }

  readonly simplifiedBooks = resource<BookSimplified[], void>({
    loader: () => firstValueFrom(this.http.get<BookSimplified[]>(`${this.url}/simplified`)),
    defaultValue: [],
  });

  readonly searchSimplifiedBooks = resource<BookSimplified[], SearchParams>({
    params: () => this.searchParams(),

    loader: ({ params }) =>
      firstValueFrom(
        this.http.get<BookSimplified[]>(`${this.url}/search`, {
          params: {
            term: params.term,
            page: params.page,
            size: params.size,
          },
        }),
      ),

    defaultValue: [],
  });

  private readonly pageParams = signal({
    page: 0,
    size: 10,
    sortBy: BookSortField.TITLE,
    direction: true,
  });

  readonly pagedBooks = resource({
    params: () => this.pageParams(),

    loader: ({ params }) =>
      firstValueFrom(this.http.get<PageResponse<BookSimplified>>(`${this.url}/page`, { params })),

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

  updatePage(params: Partial<ReturnType<typeof this.pageParams>>) {
    this.pageParams.update((current) => ({
      ...current,
      ...params,
    }));
  }
}
