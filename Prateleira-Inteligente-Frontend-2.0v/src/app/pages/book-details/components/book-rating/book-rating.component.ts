import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Book } from '@models/book.model';

@Component({
  selector: 'app-book-rating',
  imports: [MatIconModule],
  templateUrl: './book-rating.component.html',
  styleUrl: './book-rating.component.scss',
})
export class BookRatingComponent {
  readonly score = input<Book['score']>(null);
  readonly count = input<Book['assessmentQuantity']>(null);
  readonly stars = [1, 2, 3, 4, 5];
  readonly value = computed(() => Math.max(0, Math.min(5, this.score() ?? 0)));
  readonly formattedScore = computed(() =>
    this.value().toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
  );

  starIcon(star: number): string {
    if (this.value() >= star) return 'star';
    return this.value() >= star - 0.5 ? 'star_half' : 'star_border';
  }
}
