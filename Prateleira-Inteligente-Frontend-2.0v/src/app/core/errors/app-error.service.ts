import { isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, MonoTypeOperatorFunction } from 'rxjs';

const HTTP_ERROR_MESSAGES: Readonly<Record<number, string>> = {
  0: 'Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.',
  400: 'Confira os dados informados e tente novamente.',
  401: 'Não foi possível autenticar. Verifique suas credenciais e entre novamente.',
  403: 'Você não tem permissão para realizar esta ação.',
  404: 'O conteúdo solicitado não foi encontrado.',
  409: 'Já existe um registro com esses dados.',
  413: 'O arquivo enviado excede o tamanho permitido.',
  422: 'Confira os dados informados e tente novamente.',
  429: 'Muitas solicitações. Aguarde um momento e tente novamente.',
};

@Injectable({ providedIn: 'root' })
export class AppErrorService {
  private readonly snackBar = inject(MatSnackBar);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly handledErrors = new WeakSet<object>();
  private lastMessage = '';
  private lastNotificationAt = 0;

  handle(error: unknown): void {
    const originalError = error instanceof Error && error.cause ? error.cause : error;

    if (typeof originalError === 'object' && originalError !== null) {
      if (this.handledErrors.has(originalError)) return;
      this.handledErrors.add(originalError);
    }

    console.error(originalError);
    if (!isPlatformBrowser(this.platformId)) return;

    const message = this.getMessage(originalError);
    const now = Date.now();
    if (message === this.lastMessage && now - this.lastNotificationAt < 3000) return;

    this.lastMessage = message;
    this.lastNotificationAt = now;
    this.snackBar.open(message, 'Fechar', { duration: 6000 });
  }

  completeOnError<T>(): MonoTypeOperatorFunction<T> {
    return catchError((error: unknown) => {
      this.handle(error);
      return EMPTY;
    });
  }

  private getMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      if (error.status >= 500) {
        return 'O servidor está indisponível no momento. Tente novamente mais tarde.';
      }

      return HTTP_ERROR_MESSAGES[error.status] ?? 'Não foi possível concluir a solicitação.';
    }

    return 'Ocorreu um erro inesperado. Tente novamente.';
  }
}
