import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-hello-posts-file',
  templateUrl: './hello-posts-file.component.html',
  styleUrls: ['./hello-posts-file.component.css']
})
export class HelloPostsFileComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'helloPosts/file').title;
  lastPost: any = {
    title: environment.postTitles.find(x => x.path === 'helloWebsite').title,
    path: 'helloWebsite'
  };
  constructor() { }

  ngOnInit() {
  }

}
