import { UserSimplified } from './simplified/user-simplified.model';

export interface Comment {
  id: string;
  text: string;
  createdAt: string;
  bookId: string;
  user: UserSimplified;
}
