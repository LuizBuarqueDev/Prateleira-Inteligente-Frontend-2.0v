import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-lib-table',
  templateUrl: './lib-table.component.html',
  styleUrls: ['./lib-table.component.scss'],
  imports: [],
})
export class LibTableComponent {
  displayedColumns: string[] = [];
}
