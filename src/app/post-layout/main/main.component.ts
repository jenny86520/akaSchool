import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: '../../postsHtml/helloWorld.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  postUrl = '../../postsHtml/helloWorld.html';
  constructor() { }

  ngOnInit() {
  }

}
