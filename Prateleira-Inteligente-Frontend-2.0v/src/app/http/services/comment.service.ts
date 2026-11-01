import { Injectable } from '@angular/core';
import { GenericService } from '@services/generic.service';
import { Comment } from '@models/comment.model';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommentService extends GenericService<Comment> {
  constructor() {
    super('/comments');
  }

  getByBookId(bookId: string) {
    return this.getAll().pipe(
      map((comments) => comments.filter((comment) => comment.bookId === bookId)),
    );
  }
}
