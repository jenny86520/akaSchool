import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-git-instance2',
  templateUrl: './git-instance2.component.html',
  styleUrls: ['./git-instance2.component.css']
})
export class GitInstance2Component implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'gitInstance2').title;
  postGitInstance: any = environment.postTitles.find(x => x.path === 'gitInstance');
  constructor() { }

  ngOnInit() {
  }

}
