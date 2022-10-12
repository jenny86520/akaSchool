import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-hello-posts-component',
  templateUrl: './hello-posts-component.component.html',
  styleUrls: ['./hello-posts-component.component.css']
})
export class HelloPostsComponentComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'helloPosts/component').title;
  lastPost: any = {
    title: environment.postTitles.find(x => x.path === '0x02').title,
    path: '0x02'
  };

  constructor() { }

  ngOnInit() {
  }

}
