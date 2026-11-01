import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';
import { AppErrorService } from '@app/core/errors/app-error.service';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AuthPage {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly errors = inject(AppErrorService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  isLoginMode = true;
  readonly submitting = signal(false);

  readonly loginForm = this.fb.nonNullable.group({
    username: [''],
    password: [''],
  });

  readonly registerForm = this.fb.nonNullable.group({
    username: [''],
    email: [''],
    password: [''],
  });

  onLogin(): void {
    if (this.submitting()) return;

    const credentials = this.loginForm.getRawValue();
    this.submitting.set(true);
    this.authService
      .loginRequest(credentials)
      .pipe(
        this.errors.completeOnError(),
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.submitting.set(false)),
      )
      .subscribe((response) => {
        this.authService.login(response.token, credentials.username);
        void this.router.navigate(['/books']);
      });
  }

  onRegister(): void {
    if (this.submitting()) return;

    this.submitting.set(true);
    this.authService
      .registerRequest(this.registerForm.getRawValue())
      .pipe(
        this.errors.completeOnError(),
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.submitting.set(false)),
      )
      .subscribe(() => {
        this.snackBar.open('Conta criada com sucesso! Entre para continuar.', 'Fechar', {
          duration: 5000,
        });
        this.isLoginMode = true;
        this.registerForm.reset();
      });
  }
}
