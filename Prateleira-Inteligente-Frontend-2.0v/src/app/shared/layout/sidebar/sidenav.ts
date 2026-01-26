import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SidebarHeader } from './componets/sidebar-header/header';
import { MatIcon } from "@angular/material/icon";
@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: 'sidenav.html',
  styleUrl: 'sidenav.scss',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
    SidebarHeader,
    MatIcon
]
})
export class Sidenav {}
