import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-hello-posts',
  templateUrl: './hello-posts.component.html',
  styleUrls: ['./hello-posts.component.css']
})
export class HelloPostsComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'helloPosts').title;
  constructor() { }

  ngOnInit() {
  }

}
