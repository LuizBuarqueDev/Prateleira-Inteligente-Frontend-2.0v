import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '@services/book.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ResourceStateComponent } from '@app/shared/components/resource-state/resource-state.component';
import { ResourceFactory } from '@services/util/resource-factory.util';
import { Book } from '@models/book.model';
import { BookCoverDisplayComponent } from '@app/shared/components/book-cover-display/book-cover-display.component';
import { BookSummaryComponent } from './components/book-summary/book-summary.component';
import { BookAuthorsComponent } from './components/book-authors/book-authors.component';
import { BookCommentsComponent } from './components/book-comments/book-comments.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrl: './book-details.page.scss',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    ResourceStateComponent,
    BookCoverDisplayComponent,
    BookSummaryComponent,
    BookAuthorsComponent,
    BookCommentsComponent,
  ],
})
export class BookDetailsPage extends ResourceFactory {
  private readonly route = inject(ActivatedRoute);
  private readonly bookService = inject(BookService);
  private readonly routeParams = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly book = this.createParamResource<Book | null, string>(
    () => this.routeParams().get('id')!,
    (id) => this.bookService.getById(id),
    null,
  );
}
