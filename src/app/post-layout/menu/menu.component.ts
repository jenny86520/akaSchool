import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  posts: any = [];
  constructor() { }

  ngOnInit() {
    this.posts = environment.postTitles;
  }

  goToPost(post: any): string {
    return post.path ? '/' + post.path : '/' ;
  }
}
