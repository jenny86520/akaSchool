import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-git-install',
  templateUrl: './git-install.component.html',
  styleUrls: ['./git-install.component.css']
})
export class GitInstallComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'gitInstall').title;
  postGitStart: any = environment.postTitles.find(x => x.path === 'gitStart');
  constructor() { }

  ngOnInit() {
  }

}
