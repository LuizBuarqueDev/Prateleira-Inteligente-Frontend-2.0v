import { Routes } from '@angular/router';
import path from 'node:path';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page')
        .then(m => m.DashboardPage),
    pathMatch: 'full',
  },{
  path: 'books',
    loadComponent: () =>
      import('./pages/all-books/all-books')
        .then(m => m.AllBooksPage),
        pathMatch: 'full',
  },
];