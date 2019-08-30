import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hello-website',
  templateUrl: './hello-website.component.html',
  styleUrls: ['./hello-website.component.css']
})
export class HelloWebsiteComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'helloWebsite').title;
  constructor() { }

  ngOnInit() {
  }

}
