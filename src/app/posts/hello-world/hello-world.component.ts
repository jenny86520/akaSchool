import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'helloWorld').title;
  constructor() { }

  ngOnInit() {
  }

}
