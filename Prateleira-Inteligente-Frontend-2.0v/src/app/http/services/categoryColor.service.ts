import { Injectable } from '@angular/core';

export interface CategoryColorScheme {
  background: string;
  text: string;
  border: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoryColorService {
  private readonly categoryMap = new Map<string, CategoryColorScheme>();
  private currentHue = 0;

  get(category: string): CategoryColorScheme {
    if (!this.categoryMap.has(category)) {
      this.categoryMap.set(category, this.createScheme());
    }

    return this.categoryMap.get(category)!;
  }

  private createScheme(): CategoryColorScheme {
    if (this.currentHue >= 360) {
      throw new Error('Limite máximo de 360 cores únicas atingido.');
    }

    const hue = Math.floor(this.currentHue);

    this.currentHue = (this.currentHue + 137.508) % 360;

    return {
      background: `hsl(${hue}, 60%, 92%)`,
      text: `hsl(${hue}, 70%, 28%)`,
      border: `hsl(${hue}, 75%, 45%)`,
    };
  }
}
