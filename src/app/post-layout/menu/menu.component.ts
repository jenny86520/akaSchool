import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment.prod";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { Post } from "src/app/_shared/models/post";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  public searchText: string; // 搜尋字串
  public orderType: string; // 排序方式
  public homeTitle: string;
  categories: string[]; // 所有分類列表
  allPosts: Post[]; // 存放所有文章
  posts: Post[]; // 存放搜尋後的所有文章
  postsHasNoCategory: Post[]; // 存放未分類
  postsHasCategory: Post[]; // 存放已分類

  constructor(private router: Router, private afs: AngularFirestore) {}

  async ngOnInit() {
    this.orderType = "category";
    this.searchText = "";
    this.categories = environment.categories;
    this.homeTitle = environment.homeTitle;

    this.allPosts = await this.loadPosts();
    this.searchPosts();
  }

  searchPosts() {
    this.posts = this.allPosts.filter(
      (p) =>
        p.id !== "0" &&
        (this.searchText !== ""
          ? p.Title.search(this.searchText) !== -1 ||
            p.id.search(this.searchText) !== -1
          : true)
    );
    this.postsHasNoCategory = this.posts.filter((p) => p.Category.length === 0); // 未分類
    this.postsHasCategory = this.posts.filter((p) => p.Category.length > 0); // 已分類
  }

  loadPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.afs
        .collection<Post>(`/Post`)
        .snapshotChanges()
        .pipe(
          map((actions) => {
            return actions.map((action) => {
              const data = action.payload.doc.data() as Post;
              const id = action.payload.doc.id;
              delete data.Content;
              return { id, ...data };
            });
          })
        )
        .subscribe(
          (posts) => {
            resolve(posts);
          },
          (err) => {
            console.log("err...");
            reject(err);
          }
        );
    });
  }
  goToPost(post: any) {
    this.router.navigateByUrl(`${post.id}`);
    // alert('將切換至「' + post.title + '」\n\n請自行收合文章區:P');
  }
}
