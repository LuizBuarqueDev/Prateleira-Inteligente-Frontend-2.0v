import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Book } from '@models/book.model';

@Component({
  selector: 'app-book-authors',
  imports: [MatIconModule],
  templateUrl: './book-authors.component.html',
  styleUrl: './book-authors.component.scss',
})
export class BookAuthorsComponent {
  readonly authors = input.required<Book['authors']>();
}
