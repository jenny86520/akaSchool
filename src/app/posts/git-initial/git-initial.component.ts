import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-git-initial',
  templateUrl: './git-initial.component.html',
  styleUrls: ['./git-initial.component.css']
})
export class GitInitialComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'gitInitial').title;
  postGitStart: any = environment.postTitles.find(x => x.path === 'gitStart');
  postGitInstall: any = environment.postTitles.find(x => x.path === 'gitInstall');

  constructor() { }

  ngOnInit() {
  }

}
