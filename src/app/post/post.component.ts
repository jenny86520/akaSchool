import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { Location } from "@angular/common";
import { Post, Reference, Update } from "../_shared/models/post";

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

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private location: Location
  ) {
    this.router.events.subscribe((event) => {
      if (
        event instanceof NavigationEnd &&
        this.router.url.includes(this.location.path())
      ) {
        this.postNumber = this.router.url.substring(1);
        if (Number(this.postNumber) === NaN) {
          this.errorHandler();
        }

        // get post
        this.afs
          .doc<Post>(`/Post/${this.postNumber || "0"}`)
          .valueChanges()
          .subscribe(
            (post: Post) => {
              if (post) this.post = post;
              else this.errorHandler();
            },
            (err) => {
              console.log("err...");
            }
          );

        // get update collection
        this.afs
          .collection<Update>(
            `/Post/${this.postNumber || "0"}/UpdateCollection`
          )
          .valueChanges()
          .subscribe(
            (updateCollection) => {
              if (updateCollection) this.updates = updateCollection;
              else this.errorHandler();
            },
            (err) => {
              console.log("err...");
            }
          );

        // get reference collection
        this.afs
          .collection<Reference>(
            `/Post/${this.postNumber || "0"}/ReferenceCollection`
          )
          .valueChanges()
          .subscribe(
            (referenceCollection) => {
              if (referenceCollection) this.references = referenceCollection;
              else this.errorHandler();
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

  errorHandler() {
    this.postNumber = undefined;
    alert("查無該頁");
  }
}
