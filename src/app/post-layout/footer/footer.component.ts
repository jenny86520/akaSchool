import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs/operators';
class Visitors {
  ViewCount: number;
  UpdDate: Date;
}

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"],
    standalone: false
})
export class FooterComponent implements OnInit {
  public visitors: Visitors;

  constructor(private afs:AngularFirestore) {}

  async ngOnInit() {
    this.visitors =  await this.getViewCount();
    this.visitors.ViewCount = this.visitors.ViewCount? this.visitors.ViewCount + 1 : 1;
    this.visitors.UpdDate = new Date();
    this.updateViewCount();
  }

  getViewCount():Promise<Visitors>{
    return new Promise((resolve) => {
      this.afs
        .doc<Visitors>("/SystemCode/Visitors")
        .snapshotChanges()
        .pipe(map((v) => v.payload.data()))
        .subscribe(
          (v: Visitors) => {
            resolve(v);
          },
          (err) => {
            console.log("err...");
            // console.log(err);
          }
        );
    });
  }
  updateViewCount(){
    this.afs.doc<Visitors>("SystemCode/Visitors").update(this.visitors);
  }
}
