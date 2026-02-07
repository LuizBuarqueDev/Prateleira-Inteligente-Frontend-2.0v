import { UserSimplified } from './simplified/user-simplified.model';
import { BookSimplified } from './simplified/book-simplified.model';

export interface UserBook {
  id: string;
  rating: number | null;
  book: BookSimplified;
  user: UserSimplified;
}
