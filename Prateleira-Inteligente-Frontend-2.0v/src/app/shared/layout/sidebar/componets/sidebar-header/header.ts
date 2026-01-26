import { Component } from "@angular/core";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-sidebar-header",
  standalone: true,
  templateUrl: "header.html",
  styleUrl: "header.scss",
  imports: [MatIcon],
})
export class SidebarHeader {}