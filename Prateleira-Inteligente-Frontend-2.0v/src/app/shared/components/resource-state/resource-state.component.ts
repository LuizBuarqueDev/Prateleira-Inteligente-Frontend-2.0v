import { Component, input, ResourceRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-resource-state',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './resource-state.component.html',
  styleUrl: './resource-state.component.scss',
})
export class ResourceStateComponent {
  readonly resource = input.required<Pick<ResourceRef<unknown>, 'isLoading' | 'error' | 'reload'>>();
}
