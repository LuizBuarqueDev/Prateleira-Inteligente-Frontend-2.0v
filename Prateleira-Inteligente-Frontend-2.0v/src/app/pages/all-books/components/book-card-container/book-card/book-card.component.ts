import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { BookSimplified } from '@app/shared/models/simplified/book-simplified.model';
import { CategoryCardComponent } from './category-card/category-card.component';

@Component({
  selector: 'app-book-card',
  standalone: true,
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  imports: [CommonModule, MatIcon, CategoryCardComponent],
})
export class BookCardComponent {
  book = input<BookSimplified>();

  ngOnInit() {
    console.log(this.book());
  }
}
