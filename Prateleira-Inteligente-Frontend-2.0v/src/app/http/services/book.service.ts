import { Injectable } from '@angular/core';

import { GenericService } from '@services/generic.service';

import { Book } from '@models/book.model';
import { BookSimplified } from '@models/simplified/book-simplified.model';

import { SearchParams } from '@models/params/search-params.model';
import { PageResponse } from '@models/page-response.model';
import { BookSortField } from '@models/enums/book-sort-field.enum';

@Injectable({ providedIn: 'root' })
export class BookService extends GenericService<Book> {
  constructor() {
    super('/books');
  }

  getSimplifiedBooks() {
    return this.http.get<BookSimplified[]>(`${this.url}/simplified`);
  }

  searchSimplifiedBooks(params: SearchParams) {
    return this.http.get<PageResponse<BookSimplified>>(`${this.url}/search`, {
      params: {
        term: params.term,
        page: params.page,
        size: params.size,
      },
    });
  }

  getPagedBooks(params: { page: number; size: number; sortBy: BookSortField; direction: boolean }) {
    return this.http.get<PageResponse<BookSimplified>>(`${this.url}/page`, { params });
  }
}
