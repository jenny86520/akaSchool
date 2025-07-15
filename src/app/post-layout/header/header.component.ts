import { Component, OnInit } from "@angular/core";
import { OverviewComponent } from "../overview/overview.component";
import { MenuComponent } from "../menu/menu.component";

declare let $: any;
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  standalone: true,
  imports: [OverviewComponent, MenuComponent],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
