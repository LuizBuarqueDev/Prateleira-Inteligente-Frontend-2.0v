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

  get(category: string): CategoryColorScheme {
    if (!this.categoryMap.has(category)) {
      this.categoryMap.set(category, this.createScheme());
    }

    return this.categoryMap.get(category)!;
  }

  private createScheme(): CategoryColorScheme {
    const hue = Math.floor(Math.random() * 360);

    return {
      background: `hsl(${hue}, 55%, 90%)`, // fundo claro
      text: `hsl(${hue}, 65%, 25%)`, // texto forte
      border: `hsl(${hue}, 70%, 40%)`, // borda intermediária
    };
  }
}
