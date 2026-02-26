import { Component } from '@angular/core';
import { BookCardContainerComponent } from './components/book-card-container/book-card-container.component';

@Component({
  selector: 'app-all-books',
  standalone: true,
  templateUrl: 'all-books.page.html',
  styleUrls: ['all-books.page.scss'],
  imports: [BookCardContainerComponent],
})
export class AllBooksPage {}
