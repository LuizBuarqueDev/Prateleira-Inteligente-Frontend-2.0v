import { UserRole } from './enums/user-role.enum';

export interface User {
  id: string;
  username: string;
  role: UserRole;
  password: string;
  userBooks: string[];
  comments: string[];
}
