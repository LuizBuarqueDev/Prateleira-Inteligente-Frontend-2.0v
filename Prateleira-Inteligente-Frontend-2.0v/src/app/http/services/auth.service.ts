import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);

  private get storageAvailable(): boolean {
    return isPlatformBrowser(this.platformId);
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
