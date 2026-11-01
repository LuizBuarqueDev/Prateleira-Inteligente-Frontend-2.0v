import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Book } from '@models/book.model';
import { BookRelationshipsControls } from '../../book-form.types';

@Component({
  selector: 'app-book-relationships',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './book-relationships.component.html',
  styleUrl: './book-relationships.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookRelationshipsComponent {
  readonly form = input.required<FormGroup<BookRelationshipsControls>>();
  readonly authors = input.required<Book['authors']>();
  readonly categories = input.required<Book['categories']>();

  readonly compareById = (first: { id: string } | null, second: { id: string } | null) =>
    first?.id === second?.id;
}
