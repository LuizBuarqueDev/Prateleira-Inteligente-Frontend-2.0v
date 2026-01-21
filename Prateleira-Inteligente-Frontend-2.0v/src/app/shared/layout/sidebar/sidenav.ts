import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

/**
 * @title Autosize sidenav
 */
@Component({
selector: 'app-sidenav',
  templateUrl: 'sidenav.html',
  styleUrl: 'sidenav.scss',
  imports: [MatSidenavModule, MatButtonModule],
})
export class Sidenav {
  showFiller = false;
}