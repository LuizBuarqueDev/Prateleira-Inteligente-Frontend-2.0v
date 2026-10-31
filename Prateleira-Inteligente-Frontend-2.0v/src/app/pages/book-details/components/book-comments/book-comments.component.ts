import { DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ResourceStateComponent } from '@app/shared/components/resource-state/resource-state.component';
import { Book } from '@models/book.model';
import { Comment } from '@models/comment.model';
import { CommentService } from '@services/comment.service';
import { ResourceFactory } from '@services/util/resource-factory.util';

@Component({
  selector: 'app-book-comments',
  imports: [DatePipe, MatIconModule, ResourceStateComponent],
  templateUrl: './book-comments.component.html',
  styleUrl: './book-comments.component.scss',
})
export class BookCommentsComponent extends ResourceFactory {
  private readonly commentService = inject(CommentService);
  readonly bookId = input.required<Book['id']>();

  readonly comments = this.createParamResource<Comment[], string>(
    () => this.bookId(),
    (bookId) => this.commentService.getByBookId(bookId),
    [],
  );
}
