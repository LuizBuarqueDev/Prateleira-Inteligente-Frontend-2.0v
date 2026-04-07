import { Routes } from '@angular/router';
import { authGuard } from '@services/util/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },

  {
    path: 'books',
    loadComponent: () => import('./pages/all-books/all-books.page').then((m) => m.AllBooksPage),
    canActivate: [authGuard],
  },

  {
    path: 'library',
    loadComponent: () => import('./pages/my-library/my-library.page').then((m) => m.MyLibraryPage),
    canActivate: [authGuard],
  },

  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.page').then((m) => m.AuthPage),
  },
];
