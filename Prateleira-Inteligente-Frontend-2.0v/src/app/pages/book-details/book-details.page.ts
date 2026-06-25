import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '@services/book.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrl: './book-details.page.scss',
  imports: [],
})
export class BookDetailsPage {
  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);

  book = toSignal(
    this.route.paramMap.pipe(switchMap((params) => this.bookService.getById(params.get('id')!))),
  );
}
