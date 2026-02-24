import { Component, inject } from "@angular/core";
import { BookService } from '@services/book.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-book-card-container",
  standalone: true,
  templateUrl: "./book-card-container.component.html",
  styleUrls: ["./book-card-container.component.scss"],
  imports: [CommonModule,],
})

export class BookCardContainerComponent {
  books = inject(BookService).simplifiedBooks;
}