import { Component } from '@angular/core';
import { RatedBooksCardsComponent } from './rated-books-cards/rated-books-cards.component';

@Component({
  selector: 'app-rated-books',
  templateUrl: './rated-books.component.html',
  styleUrl: './rated-books.component.scss',
  imports: [RatedBooksCardsComponent],
})
export class RatedBooksComponent {}
