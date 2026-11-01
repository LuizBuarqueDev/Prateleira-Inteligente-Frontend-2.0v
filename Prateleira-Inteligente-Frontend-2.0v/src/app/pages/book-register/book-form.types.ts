import { FormControl } from '@angular/forms';
import { Book } from '@models/book.model';

type BookInformation = Pick<Book, 'title' | 'cover' | 'description' | 'publisher'> & {
  publicationDate: Date | null;
};

export type BookInformationControls = {
  [Field in keyof BookInformation]: FormControl<BookInformation[Field]>;
};

export type BookRelationshipsControls = {
  [Field in 'authors' | 'categories']: FormControl<Book[Field]>;
};
