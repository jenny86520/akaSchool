import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { NavigationEnd, Router } from "@angular/router";
class Post {
  Title: string;
  Content: string;
  Tag: string[];
  Category: string[];
}
class Reference {
  Author: string;
  Title: string;
  Category: string;
  Url: string;
}
class Update {
  date: any;
  user: string;
}

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  public postNumber: string;
  public post: Post;
  public references: Reference[];
  public updates: Update[];

  private tmp;

  constructor(private afs: AngularFirestore, private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.postNumber = this.router.url.substring(1);
        // get post
        this.afs
          .doc<Post>(`/Post/${this.postNumber || "0"}`)
          .valueChanges()
          .subscribe(
            (post: Post) => {
              this.post = post;
            },
            (err) => {
              console.log("err...");
            }
          );

        // get update collection
        this.afs
          .collection<Update>(
            `/Post/${this.router.url.substring(1) || "0"}/UpdateCollection`
          )
          .valueChanges()
          .subscribe(
            (updateCollection) => {
              this.updates = updateCollection;
            },
            (err) => {
              console.log("err...");
            }
          );

        // get reference collection
        this.afs
          .collection<Reference>(
            `/Post/${this.router.url.substring(1) || "0"}/ReferenceCollection`
          )
          .valueChanges()
          .subscribe(
            (referenceCollection) => {
              this.references = referenceCollection;
            },
            (err) => {
              console.log("err...");
            }
          );
      }
    });
  }

  ngOnInit() {
    this.post = {
      Title: "",
      Content: "",
      Tag: [],
      Category: [],
    };
  }
}
