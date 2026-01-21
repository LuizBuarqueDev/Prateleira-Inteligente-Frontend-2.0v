import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidenav } from './shared/layout/sidebar/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidenav],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Prateleira-Inteligente-Frontend-2.0v');
}
