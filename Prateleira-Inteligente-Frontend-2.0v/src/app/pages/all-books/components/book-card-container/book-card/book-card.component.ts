import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { BookSimplified } from '@app/shared/models/simplified/book-simplified.model';
import { CategoryCardComponent } from '@app/shared/components/category-card/category-card.component';
import { RouterLink } from '@angular/router';
import { BookCoverDisplayComponent } from '@app/shared/components/book-cover-display/book-cover-display.component';

@Component({
  selector: 'app-book-card',
  standalone: true,
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  imports: [MatIcon, CategoryCardComponent, RouterLink, BookCoverDisplayComponent],
})
export class BookCardComponent {
  book = input<BookSimplified>();
}
