import { Component, inject } from '@angular/core';

import { UserBookService } from '@services/user-book.service';
import { ResourceFactory } from '@services/util/resource-factory.util';
import { ResourceStateComponent } from '@app/shared/components/resource-state/resource-state.component';
import { UserBook } from '@models/user-book.model';

@Component({
  standalone: true,
  selector: 'app-lib-table',
  templateUrl: './lib-table.component.html',
  styleUrls: ['./lib-table.component.scss'],
  imports: [ResourceStateComponent],
})
export class LibTableComponent extends ResourceFactory {
  private readonly userBookService = inject(UserBookService);

  readonly userBooks = this.createResource<UserBook[]>(
    () => this.userBookService.getByUserId(),
    [],
  );
}
