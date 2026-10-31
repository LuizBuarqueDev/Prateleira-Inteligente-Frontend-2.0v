import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Book } from '@models/book.model';

@Component({
  selector: 'app-book-cover',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './book-cover.component.html',
  styleUrl: './book-cover.component.scss',
})
export class BookCoverComponent {
  readonly control = input.required<FormControl<Book['cover']>>();
  readonly preview = signal('');
  readonly fileName = signal('');
  readonly error = signal('');
  readonly reading = signal(false);
  private reader?: FileReader;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.reader?.abort());
  }

  selectFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;

    this.removeCover();
    this.control().markAsTouched();

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      this.setError('Selecione uma imagem JPG, PNG ou WebP.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      this.setError('A imagem deve ter no máximo 5 MB.');
      return;
    }

    const reader = new FileReader();
    this.reader = reader;
    this.reading.set(true);
    this.control().markAsPending();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      this.control().setValue(dataUrl.slice(dataUrl.indexOf(',') + 1));
      this.preview.set(dataUrl);
      this.fileName.set(file.name);
      this.reading.set(false);
    };
    reader.onerror = () => {
      this.reading.set(false);
      this.setError('Não foi possível ler a imagem. Selecione o arquivo novamente.');
    };
    reader.readAsDataURL(file);
  }

  removeCover(): void {
    this.reader?.abort();
    this.reading.set(false);
    this.control().setValue('');
    this.preview.set('');
    this.fileName.set('');
    this.error.set('');
  }

  private setError(message: string): void {
    this.error.set(message);
    this.control().setErrors({ invalidImage: true });
  }
}
