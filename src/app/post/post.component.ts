import { Component, inject, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { DatePipe, Location } from "@angular/common";
import { Post, Reference, Update } from "../_shared/interfaces/post";
import { PostService } from "../_shared/services/post.service";
import { filter, startWith } from "rxjs";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
  standalone: true,
  imports: [DatePipe, RouterModule],
})
export class PostComponent implements OnInit {
  public postNumber: string = "0";
  public post: Post;
  public references: Reference[];
  public updates: Update[];

  private postService = inject(PostService);
  private router = inject(Router);
  private location = inject(Location);

  ngOnInit() {
    this.post = {
      Title: "",
      Content: "",
      Tag: [],
      Category: [],
    };
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        startWith(this.router)
      )
      .subscribe(() => {
        if (this.router.url.includes(this.location.path())) {
          this.postNumber = this.router.url.substring(1);
          if (Number.isNaN(Number(this.postNumber))) {
            this.errorHandler();
          }

          // get post
          this.postService.getPost(this.postNumber).subscribe((post) => {
            if (!!post) this.post = post;
            else this.errorHandler();
          });

          // get update collection
          this.postService
            .getUpdateCollection(this.postNumber)
            .subscribe((updateCollection) => {
              if (!!updateCollection) this.updates = updateCollection;
              else this.errorHandler();
            });

          // get reference collection
          this.postService
            .getReferenceCollection(this.postNumber)
            .subscribe((referenceCollection) => {
              if (referenceCollection) this.references = referenceCollection;
              else this.errorHandler();
            });
        }
      });
  }

  errorHandler() {
    this.postNumber = undefined;
    alert("查無該頁");
  }
}
