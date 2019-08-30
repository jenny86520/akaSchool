import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectPost: any;
  postTitles: any;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.postTitles = environment.postTitles;
    this.selectPost = environment.postTitles[0];
  }

  goToPost() {
    // for home not show (''/'')
    this.router.navigate(this.selectPost.path ? ['/', this.selectPost.path] : ['/'], { skipLocationChange: true });
  }
}
