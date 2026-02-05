import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SidebarHeader } from './componets/sidebar-header/header.component';
import { MatIcon } from "@angular/material/icon";
@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: 'sidenav.component.html',
  styleUrl: 'sidenav.component.scss',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
    SidebarHeader,
    MatIcon
]
})
export class Sidenav {}
