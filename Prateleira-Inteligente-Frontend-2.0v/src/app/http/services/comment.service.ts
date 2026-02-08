import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Comment } from '../../shared/models/comment.model';

@Injectable({ providedIn: 'root' })
export class CommentService extends GenericService<Comment> {
  constructor() {
    super('/api/comments');
  }
}
