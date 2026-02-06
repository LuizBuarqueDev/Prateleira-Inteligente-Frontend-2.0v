import { Component } from "@angular/core";
import { GenericStatcardComponent } from "./components/statcard/generic/generic-statcard.component";

@Component({
  selector: "app-dashboard",
  standalone: true,
    templateUrl: "dashboard.page.html",
    styleUrls: ["dashboard.page.scss"],
    imports: [GenericStatcardComponent],
})
export class DashboardPage {}