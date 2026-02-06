import { Component } from '@angular/core';
import { StatsCardsContainerComponent } from './components/stats-cards-container/stats-cards-container.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  imports: [StatsCardsContainerComponent],
})
export class DashboardPage {}
