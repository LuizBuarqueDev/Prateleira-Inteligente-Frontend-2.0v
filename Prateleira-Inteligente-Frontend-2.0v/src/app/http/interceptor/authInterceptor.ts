import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('/auth')) {
    return next(req);
  }

  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

  const cloned = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    : req;

  return next(cloned).pipe(
    catchError((error) => {
      console.error('Erro HTTP interceptado:', error);
      return throwError(() => error);
    }),
  );
};
