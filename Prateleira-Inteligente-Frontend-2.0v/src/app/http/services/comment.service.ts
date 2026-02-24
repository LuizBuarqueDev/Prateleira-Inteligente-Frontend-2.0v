import { Injectable } from '@angular/core';
import { GenericService } from '@services/generic.service';
import { Comment } from '@models/comment.model';

@Injectable({ providedIn: 'root' })
export class CommentService extends GenericService<Comment> {
  constructor() {
    super('/comments');
  }
}
