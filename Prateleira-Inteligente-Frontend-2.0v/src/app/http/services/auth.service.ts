import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../api.config';

import { LoginRequest } from '@models/auth/login-request.model';
import { RegisterRequest } from '@models/auth/register-request.model';
import { TokenResponse } from '@models/auth/response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  private url = `${API_CONFIG.baseUrl}/auth`;

  private get storageAvailable(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  loginRequest(dto: LoginRequest) {
    return this.http.post<TokenResponse>(`${this.url}/login`, dto);
  }

  registerRequest(dto: RegisterRequest) {
    return this.http.post(`${this.url}/register`, dto, {
      responseType: 'text',
    });
  }

  login(token: string, username: string) {
    if (!this.storageAvailable) return;

    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  logout() {
    if (!this.storageAvailable) return;

    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  isAuthenticated(): boolean {
    if (!this.storageAvailable) return false;

    return !!localStorage.getItem('token');
  }

  getUsername(): string | null {
    if (!this.storageAvailable) return null;

    return localStorage.getItem('username');
  }

  getToken(): string | null {
    if (!this.storageAvailable) return null;

    return localStorage.getItem('token');
  }
}
