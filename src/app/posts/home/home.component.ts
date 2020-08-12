import { Component, OnInit } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public content: string;

  constructor(private afs: AngularFirestore) {
    this.afs.collection('/Post').snapshotChanges()
    .pipe(map((posts) => posts['0'].payload.doc.data()))
    .subscribe(post => {
      this.content = post.Content;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
