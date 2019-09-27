import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-git-start',
  templateUrl: './git-start.component.html',
  styleUrls: ['./git-start.component.css']
})
export class GitStartComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'gitStart').title;
  constructor() { }

  ngOnInit() {
  }

}
