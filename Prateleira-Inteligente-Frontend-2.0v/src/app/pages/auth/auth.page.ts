import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoginMode = true;

  loginForm: FormGroup = this.fb.group({
    username: [''],
    password: [''],
  });

  registerForm: FormGroup = this.fb.group({
    username: [''],
    email: [''],
    password: [''],
  });

  onLogin() {
    this.authService.loginRequest(this.loginForm.value).subscribe({
      next: (response) => {
        this.authService.login(response.token, this.loginForm.value.username);

        this.router.navigate(['/books']);
      },
      error: (err) => {
        alert(err?.error || 'Erro ao fazer login');
      },
    });
  }

  onRegister() {
    this.authService.registerRequest(this.registerForm.value).subscribe({
      next: (response) => {
        alert(response);
        this.isLoginMode = true;
        this.registerForm.reset();
      },
      error: (err) => {
        alert(err?.error || 'Erro ao registrar');
      },
    });
  }
}
