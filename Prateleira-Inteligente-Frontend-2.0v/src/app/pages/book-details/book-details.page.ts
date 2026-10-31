import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '@services/book.service';
import { MatIcon } from '@angular/material/icon';
import { Location } from '@angular/common';
import { BookCoverPipe } from '@app/shared/pipes/book-cover.pipe';
import { ResourceStateComponent } from '@app/shared/components/resource-state/resource-state.component';
import { ResourceFactory } from '@services/util/resource-factory.util';
import { Book } from '@models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrl: './book-details.page.scss',
  imports: [MatIcon, BookCoverPipe, ResourceStateComponent],
})
export class BookDetailsPage extends ResourceFactory {
  private readonly route = inject(ActivatedRoute);
  private readonly bookService = inject(BookService);
  private readonly location = inject(Location);
  private readonly routeParams = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly book = this.createParamResource<Book | null, string>(
    () => this.routeParams().get('id')!,
    (id) => this.bookService.getById(id),
    null,
  );

  goBackPage(): void {
    this.location.back();
  }
}
