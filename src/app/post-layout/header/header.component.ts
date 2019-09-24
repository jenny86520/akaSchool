import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public selectPost: any;
  public searchText: string;
  homeTitle: any;
  categories: string[];
  posts: any;
  postsHasNoCategory: any;  // 存放未分類
  postsHasCategory: any;    // 存放已分類

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.searchText = '';
    this.homeTitle = environment.postTitles[0];
    this.categories = environment.categories;
    this.selectPost = this.homeTitle;
    this.loadPosts();
  }

  loadPosts() {
    this.posts = environment.postTitles.filter(p => this.searchText !== '' ? p.title.search(this.searchText) !== -1 : true);
    this.postsHasNoCategory = this.posts.filter(p => p.category === '' && p.id !== 0); // 未分類
    this.postsHasCategory = this.posts.filter(p => p.category !== '');   // 已分類
  }
  goToPost(post: any) {
    // for home not show (''/'')
    // navigateByUrl(this.selectPost.path ? ['/', this.selectPost.path] : ['/'])
    this.router.navigateByUrl(post.path ? '/' + post.path : '/', { skipLocationChange: true });
  }
}
