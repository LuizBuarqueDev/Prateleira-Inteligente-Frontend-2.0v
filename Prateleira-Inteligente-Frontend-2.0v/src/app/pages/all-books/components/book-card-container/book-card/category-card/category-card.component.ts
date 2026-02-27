import { Component, computed, inject, input } from '@angular/core';
import { CategoryColorService } from '@app/http/services/categoryColor.service';

@Component({
  standalone: true,
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
  imports: [],
})
export class CategoryCardComponent {
  private readonly categoryColorService = inject(CategoryColorService);

  readonly category = input<string>();

  readonly colors = computed(() => this.categoryColorService.get(this.category()!));
}
