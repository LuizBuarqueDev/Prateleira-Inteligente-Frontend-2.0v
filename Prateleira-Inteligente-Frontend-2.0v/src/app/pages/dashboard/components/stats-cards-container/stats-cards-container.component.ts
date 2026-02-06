import { Component } from '@angular/core';
import { GenericStatcardComponent } from '../statcard/generic/generic-statcard.component';

@Component({
  selector: 'app-stats-cards-container',
  standalone: true,
  imports: [GenericStatcardComponent],
  templateUrl: 'stats-cards-container.component.html',
  styleUrls: ['stats-cards-container.component.scss'],
})
export class StatsCardsContainerComponent {}
