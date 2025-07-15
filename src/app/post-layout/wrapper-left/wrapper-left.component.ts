import { Component, OnInit } from "@angular/core";
import { OverviewComponent } from "../overview/overview.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: "app-wrapper-left",
  templateUrl: "./wrapper-left.component.html",
  styleUrls: ["./wrapper-left.component.css"],
  standalone: true,
  imports: [OverviewComponent, MenuComponent],
})
export class WrapperLeftComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
