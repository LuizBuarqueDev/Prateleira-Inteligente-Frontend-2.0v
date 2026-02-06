import { Component } from '@angular/core';
import { StatsCardsContainerComponent } from './components/stats-cards-container/stats-cards-container.component';
import { YourLibraryComponent } from './components/your-library/your-library.component';
import { RatedBooksComponent } from './components/rated-books/rated-books.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  imports: [StatsCardsContainerComponent, YourLibraryComponent, RatedBooksComponent],
})
export class DashboardPage {}
