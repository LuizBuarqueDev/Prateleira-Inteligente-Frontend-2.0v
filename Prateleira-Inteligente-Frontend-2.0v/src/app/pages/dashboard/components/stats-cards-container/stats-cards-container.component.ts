import { Component, inject } from '@angular/core';

import { ResourceFactory } from '@services/util/resource-factory.ultil';

import { BookService } from '@services/book.service';
import { AuthorService } from '@services/author.service';
import { CategoryService } from '@services/category.service';
import { UserService } from '@services/user.service';
import { GenericStatcardComponent } from '../statcard/generic/generic-statcard.component';
import { CommentService } from '@app/http/services/comment.service';

@Component({
  selector: 'app-stats-cards-container',
  standalone: true,
  templateUrl: 'stats-cards-container.component.html',
  styleUrls: ['stats-cards-container.component.scss'],
  imports: [GenericStatcardComponent],
})
export class StatsCardsContainerComponent extends ResourceFactory {
  private readonly bookService = inject(BookService);
  private readonly userService = inject(UserService);
  private readonly categoryService = inject(CategoryService);
  private readonly commentService = inject(CommentService);

  readonly booksCount = this.createResource(() => this.bookService.count(), 0);

  readonly categoriesCount = this.createResource(() => this.categoryService.count(), 0);

  readonly usersCount = this.createResource(() => this.userService.count(), 0);

  readonly commentsCount = this.createResource(() => this.commentService.count(), 0);
}
