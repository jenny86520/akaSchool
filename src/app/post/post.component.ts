import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
class Post {
  Title: string;
  Content: string;
  Tag: string[];
  Category: string[];
  UpdDates: any[];
  UpdUser: string[];
}
class Reference {
  Author: string;
  Title: string;
  Category: string;
  Url: string;
}

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  public post: Post;
  public references: Reference[];

  constructor(private afs: AngularFirestore) {
    this.afs
      .doc<Post>("/Post/0x00")
      .snapshotChanges()
      .pipe(map((posts) => posts.payload.data()))
      .subscribe(
        (post : Post) => {
          this.post = post;
        },
        (err) => {
          console.log("err...");
          // console.log(err);
        }
      );
  }

  ngOnInit() {
    this.post = {
      Title: "",
      Content: "",
      Tag: [],
      Category: [],
      UpdUser: [],
      UpdDates: [],
    };
  }
}
