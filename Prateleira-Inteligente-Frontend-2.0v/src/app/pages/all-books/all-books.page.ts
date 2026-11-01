import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { BookCardContainerComponent } from './components/book-card-container/book-card-container.component';
import { SearchBarComponent } from './components/search-bar.component/search-bar.component';

@Component({
  selector: 'app-all-books',
  standalone: true,
  templateUrl: 'all-books.page.html',
  styleUrls: ['all-books.page.scss'],
  imports: [BookCardContainerComponent, SearchBarComponent, MatButtonModule, MatIconModule, RouterLink],
})
export class AllBooksPage {
  searchTerm = signal('');
}
