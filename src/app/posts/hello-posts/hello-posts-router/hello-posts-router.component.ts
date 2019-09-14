import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-hello-posts-router',
  templateUrl: './hello-posts-router.component.html',
  styleUrls: ['./hello-posts-router.component.css']
})
export class HelloPostsRouterComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'helloPosts/router').title;
  lastPost: any = {
    title: environment.postTitles.find(x => x.path === 'helloPosts/binding').title,
    path: 'helloPosts/component'
  };

  constructor() { }

  ngOnInit() {
  }

}
