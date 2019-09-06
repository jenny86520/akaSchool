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
  homeTitle: any;
  postTitles: any;
  angularPostTitles: any;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.homeTitle = environment.postTitles[0];
    this.postTitles = environment.postTitles.filter(p => p.id <= 2 && p.id !== 0);
    this.angularPostTitles = environment.postTitles.filter(p => p.id > 2);
    this.selectPost = environment.postTitles[0];
  }
  goToPost(post: any) {
    // for home not show (''/'')
    // navigateByUrl(this.selectPost.path ? ['/', this.selectPost.path] : ['/'])
    this.router.navigateByUrl(post.path ? '/' + post.path : '/', { skipLocationChange: true });
  }
}
