import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '@services/book.service';
import { switchMap } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrl: './book-details.page.scss',
  imports: [MatIcon],
})
export class BookDetailsPage {
  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);
  private location = inject(Location);

  book = toSignal(
    this.route.paramMap.pipe(switchMap((params) => this.bookService.getById(params.get('id')!))),
  );

  goBackPage() {
    this.location.back();
  }
}
