import { Component, Input } from "@angular/core";
import { NgClass } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-generic-statcard",
  standalone: true,
  templateUrl: "generic-statcard.component.html",
  styleUrls: ["generic-statcard.component.scss"],
  imports: [MatIconModule, NgClass],
})
export class GenericStatcardComponent {
  @Input() icon!: string;
  @Input() count!: number | string;
  @Input() label!: string;

  // fundo do ícone
  @Input() iconBgClass?: string;
}
