import { ErrorHandler, inject, Injectable } from '@angular/core';
import { AppErrorService } from './app-error.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private readonly errors = inject(AppErrorService);

  handleError(error: unknown): void {
    this.errors.handle(error);
  }
}
