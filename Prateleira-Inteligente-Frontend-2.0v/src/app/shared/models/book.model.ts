import { AuthorSimplified } from './simplified/author-simplified.model';
import { CategoriesSimplified } from './simplified/categories-simplified.model';

export interface Book {
  id: string;
  title: string;
  cover: string;
  publicationDate: string;
  description: string;
  publisher: string;
  score: number | null;
  assessmentQuantity: number | null;
  authors: AuthorSimplified[];
  categories: CategoriesSimplified[];
  userBooks: string[];
}
