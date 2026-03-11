import { Component, inject } from '@angular/core';
import { UserBookService } from '@app/http/services/user-book.service';

@Component({
  standalone: true,
  selector: 'app-lib-table',
  templateUrl: './lib-table.component.html',
  styleUrls: ['./lib-table.component.scss'],
  imports: [],
})
export class LibTableComponent {
  userBooks = inject(UserBookService).userBooksByUserId;
}
