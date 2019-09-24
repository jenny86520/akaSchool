import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public selectPost: any;     // 暫存選擇的文章
  public searchText: string;  // 搜尋字串
  public orderType: string;   // 排序方式
  homeTitle: any;           // akaSchool
  categories: string[];     // 所有分類列表
  posts: any;               // 存放所有文章
  postsHasNoCategory: any;  // 存放未分類
  postsHasCategory: any;    // 存放已分類

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.orderType = 'category';
    this.searchText = '';
    this.homeTitle = environment.postTitles[0];
    this.categories = environment.categories;
    this.selectPost = this.homeTitle;
    this.loadPosts();
  }

  loadPosts() {
    this.posts = environment.postTitles.filter(p => p.id !== 0 && (this.searchText !== '' ? p.title.search(this.searchText) !== -1 : true));
    this.postsHasNoCategory = this.posts.filter(p => p.category === ''); // 未分類
    this.postsHasCategory = this.posts.filter(p => p.category !== '');   // 已分類
  }
  goToPost(post: any) {
    // for home not show (''/'')
    // navigateByUrl(this.selectPost.path ? ['/', this.selectPost.path] : ['/'])
    this.router.navigateByUrl(post.path ? '/' + post.path : '/', { skipLocationChange: true });
  }
}
