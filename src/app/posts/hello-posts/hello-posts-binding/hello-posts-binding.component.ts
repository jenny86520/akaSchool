import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-hello-posts-binding',
  templateUrl: './hello-posts-binding.component.html',
  styleUrls: ['./hello-posts-binding.component.css']
})
export class HelloPostsBindingComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'helloPosts/binding').title;
  lastPost: any = {
    title: environment.postTitles.find(x => x.path === 'helloPosts/component').title,
    path: 'helloPosts/file'
  };
  constructor() { }

  ngOnInit() {
  }

}
