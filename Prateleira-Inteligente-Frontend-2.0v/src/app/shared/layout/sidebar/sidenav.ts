import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: 'sidenav.html',
  styleUrl: 'sidenav.scss',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
export class Sidenav {}
