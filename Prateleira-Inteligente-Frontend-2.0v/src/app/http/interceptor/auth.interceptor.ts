import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { API_CONFIG } from '../api.config';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (
    !req.url.startsWith(`${API_CONFIG.baseUrl}/`) ||
    req.url.startsWith(`${API_CONFIG.baseUrl}/auth/`)
  ) {
    return next(req);
  }

  const token = inject(AuthService).getToken();

  const cloned = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    : req;

  return next(cloned);
};
