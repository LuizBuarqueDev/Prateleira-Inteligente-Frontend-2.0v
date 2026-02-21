import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'books',
    loadComponent: () => import('./pages/all-books/all-books.page').then((m) => m.AllBooksPage),
    pathMatch: 'full',
  },
  {
    path: 'library',
    loadComponent: () =>
      import('./pages/my-library/my-library.page').then((m) => m.MyLibraryComponent),
    pathMatch: 'full',
  },
];
