import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CategoryCardComponent } from '@app/shared/components/category-card/category-card.component';
import { Book } from '@models/book.model';
import { BookRatingComponent } from '../book-rating/book-rating.component';

@Component({
  selector: 'app-book-summary',
  imports: [
    DatePipe,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    CategoryCardComponent,
    BookRatingComponent,
  ],
  templateUrl: './book-summary.component.html',
  styleUrl: './book-summary.component.scss',
})
export class BookSummaryComponent {
  readonly book = input.required<Book>();
  readonly authorNames = computed(() => this.book().authors.map((author) => author.name).join(', '));
}
