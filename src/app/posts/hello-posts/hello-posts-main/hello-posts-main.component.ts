import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from 'src/app/post-layout/header/header.component';

@Component({
  selector: 'app-hello-posts-main',
  templateUrl: './hello-posts-main.component.html',
  styleUrls: ['./hello-posts-main.component.css']
})
export class HelloPostsMainComponent implements OnInit {

  // @Input() title: string;
  @Input() lastPost: any = {
    title: null
  };
  @Input() classNumber: number;

  path: string;
  constructor() {
  }

  ngOnInit() {
  }
}
