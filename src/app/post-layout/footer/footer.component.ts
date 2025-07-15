import { Component, inject, OnInit } from "@angular/core";
import { SystemService } from "src/app/_shared/services/system.service";
import { Visitors } from "src/app/_shared/interfaces/system";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
  standalone: true,
})
export class FooterComponent implements OnInit {
  public visitors: Visitors;

  private systemService = inject(SystemService);

  async ngOnInit() {
    this.visitors = await this.getViewCount();
    if (this.visitors) {
      this.visitors.ViewCount = this.visitors.ViewCount
        ? this.visitors.ViewCount + 1
        : 1;
      this.visitors.UpdDate = new Date();
      this.updateViewCount();
    }
  }

  getViewCount(): Promise<Visitors> {
    return new Promise((resolve) => {
      this.systemService.getVisitors().subscribe({
        next: (v: Visitors) => {
          resolve(v);
        },
      });
    });
  }

  updateViewCount() {
    this.systemService.updateVisitors(this.visitors);
  }
}
