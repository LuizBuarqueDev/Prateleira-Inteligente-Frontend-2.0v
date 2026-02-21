import { Component } from "@angular/core";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-sidebar-header",
  standalone: true,
  templateUrl: "header.component.html",
  styleUrl: "header.component.scss",
  imports: [MatIcon],
})
export class SidebarHeader {}