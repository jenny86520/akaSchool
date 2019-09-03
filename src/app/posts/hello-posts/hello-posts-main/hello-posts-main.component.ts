import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-posts-main',
  templateUrl: './hello-posts-main.component.html',
  styleUrls: ['./hello-posts-main.component.css']
})
export class HelloPostsMainComponent implements OnInit {

  // @Input() title: string;
  @Input() lastPost: any = {
    title: null,
    path: null
  };
  @Input() classNumber: number;

  path: string;
  constructor() {
  }

  ngOnInit() {
    this.path = '/' + this.lastPost.path;
  }

}
