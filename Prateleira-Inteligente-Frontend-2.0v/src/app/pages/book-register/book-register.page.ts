import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { Book } from '@models/book.model';
import { AuthorService } from '@services/author.service';
import { BookService } from '@services/book.service';
import { CategoryService } from '@services/category.service';
import { finalize, forkJoin } from 'rxjs';
import { BookInformationComponent } from './components/book-information/book-information.component';
import { BookRelationshipsComponent } from './components/book-relationships/book-relationships.component';

@Component({
  selector: 'app-book-register',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    BookInformationComponent,
    BookRelationshipsComponent,
  ],
  templateUrl: './book-register.page.html',
  styleUrl: './book-register.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookRegisterPage {
  private readonly fb = inject(FormBuilder);
  private readonly bookService = inject(BookService);
  private readonly authorService = inject(AuthorService);
  private readonly categoryService = inject(CategoryService);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  readonly authors = signal<Book['authors']>([]);
  readonly categories = signal<Book['categories']>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly loadError = signal('');
  readonly saveError = signal('');

  readonly form = this.fb.group({
    information: this.fb.group({
      title: this.fb.nonNullable.control('', [Validators.required, Validators.pattern(/\S/)]),
      publisher: this.fb.nonNullable.control('', [Validators.required, Validators.pattern(/\S/)]),
      publicationDate: this.fb.control<Date | null>(null, Validators.required),
      description: this.fb.nonNullable.control('', [Validators.required, Validators.pattern(/\S/)]),
      cover: this.fb.nonNullable.control(''),
    }),
    relationships: this.fb.nonNullable.group({
      authors: this.fb.nonNullable.control<Book['authors']>([]),
      categories: this.fb.nonNullable.control<Book['categories']>([]),
    }),
  });

  readonly formStatus = toSignal(this.form.statusChanges, { initialValue: this.form.status });

  constructor() {
    this.loadRelationships();
  }

  loadRelationships(): void {
    if (this.loading()) return;

    this.loading.set(true);
    this.loadError.set('');

    forkJoin({
      authors: this.authorService.getAll(),
      categories: this.categoryService.getAll(),
    })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: ({ authors, categories }) => {
          this.authors.set(authors.map(({ id, name }) => ({ id, name })));
          this.categories.set(categories.map(({ id, name }) => ({ id, name })));
        },
        error: () => {
          this.loadError.set(
            'Não foi possível carregar os autores e as categorias. Você pode cadastrar o livro sem esses vínculos.',
          );
        },
      });
  }

  save(): void {
    if (this.saving() || this.form.pending) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { information, relationships } = this.form.getRawValue();
    const publicationDate = information.publicationDate;
    if (!publicationDate || Number.isNaN(publicationDate.getTime())) return;

    const date = [
      String(publicationDate.getFullYear()).padStart(4, '0'),
      String(publicationDate.getMonth() + 1).padStart(2, '0'),
      String(publicationDate.getDate()).padStart(2, '0'),
    ].join('-');

    const book: Book = {
      id: '',
      title: information.title.trim(),
      publisher: information.publisher.trim(),
      description: information.description.trim(),
      cover: information.cover,
      publicationDate: date,
      ...relationships,
      score: null,
      assessmentQuantity: null,
      userBooks: [],
    };

    this.saving.set(true);
    this.saveError.set('');
    this.form.disable();

    this.bookService
      .create(book)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.saving.set(false);
          this.form.enable();
        }),
      )
      .subscribe({
        next: (createdBook) => {
          this.snackBar.open('Livro cadastrado com sucesso!', 'Fechar', { duration: 5000 });
          void this.router.navigate(createdBook?.id ? ['/book', createdBook.id] : ['/books']);
        },
        error: (error: HttpErrorResponse) => {
          this.saveError.set(
            error.status === 401 || error.status === 403
              ? 'Você precisa estar conectado e ter permissão para cadastrar livros.'
              : 'Não foi possível cadastrar o livro. Confira os dados e tente novamente.',
          );
        },
      });
  }
}
