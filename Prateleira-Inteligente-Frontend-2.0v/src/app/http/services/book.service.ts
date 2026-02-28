import { Injectable, resource, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { GenericService } from '@services/generic.service';
import { Book } from '@models/book.model';
import { BookSimplified } from '@models/simplified/book-simplified.model';

@Injectable({ providedIn: 'root' })
export class BookService extends GenericService<Book> {
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

  readonly searchedSimplifiedBooks = resource<BookSimplified[], string>({
    params: () => this.searchTerm(),
    loader: ({ params }) =>
      firstValueFrom(
        this.http.get<BookSimplified[]>(
          `${this.url}/search?term=${encodeURIComponent(params)}&page=0&size=10`,
        ),
      ),
    defaultValue: [],
  });
}
