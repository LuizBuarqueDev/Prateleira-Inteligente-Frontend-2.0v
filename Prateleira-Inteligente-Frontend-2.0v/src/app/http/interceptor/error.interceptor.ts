import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AppErrorService } from '@app/core/errors/app-error.service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
  const errors = inject(AppErrorService);

  return next(request).pipe(
    catchError((error: unknown) => {
      errors.handle(error);
      return throwError(() => error);
    }),
  );
};
