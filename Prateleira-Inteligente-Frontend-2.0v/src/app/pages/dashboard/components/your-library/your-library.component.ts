import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-your-library',
  templateUrl: './your-library.component.html',
  styleUrl: './your-library.component.scss',
  imports: [MatButtonModule],
})
export class YourLibraryComponent {
  count: number = 0;
}
