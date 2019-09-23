import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-hello-posts-environment',
  templateUrl: './hello-posts-environment.component.html',
  styleUrls: ['./hello-posts-environment.component.css']
})
export class HelloPostsEnvironmentComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'helloPosts/environment').title;
  lastPost: any = {
    title: environment.postTitles.find(x => x.path === 'helloPosts/router').title,
    path: 'helloPosts/router'
  };
  constructor() { }

  ngOnInit() {
  }

}
