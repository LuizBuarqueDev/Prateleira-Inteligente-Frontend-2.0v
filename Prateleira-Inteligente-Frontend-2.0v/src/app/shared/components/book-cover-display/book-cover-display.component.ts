import { Component, input, linkedSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BookCoverPipe } from '@app/shared/pipes/book-cover.pipe';
import { Book } from '@models/book.model';

@Component({
  selector: 'app-book-cover-display',
  imports: [MatIconModule, BookCoverPipe],
  templateUrl: './book-cover-display.component.html',
  styleUrl: './book-cover-display.component.scss',
  host: { '[class.card-cover]': "variant() === 'card'" },
})
export class BookCoverDisplayComponent {
  readonly book = input.required<Pick<Book, 'title' | 'cover'>>();
  readonly variant = input<'details' | 'card'>('details');
  readonly imageFailed = linkedSignal({
    source: () => this.book().cover,
    computation: () => false,
  });
}
