import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SidebarHeader } from './components/sidebar-header/header.component';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '@app/http/services/auth.service';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: 'sidenav.component.html',
  styleUrl: 'sidenav.component.scss',
  imports: [MatSidenavModule, MatButtonModule, RouterModule, SidebarHeader, MatIcon],
})
export class Sidenav {
  readonly authService = inject(AuthService);
}
