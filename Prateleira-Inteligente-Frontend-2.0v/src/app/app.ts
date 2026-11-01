import { Component, signal } from '@angular/core';
import { Sidenav } from './shared/layout/sidebar/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidenav],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Prateleira-Inteligente-Frontend-2.0v');
}
