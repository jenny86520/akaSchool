import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-git-instance-reset-revert',
  templateUrl: './git-instance-reset-revert.component.html',
  styleUrls: ['./git-instance-reset-revert.component.css']
})
export class GitInstanceResetRevertComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'gitInstance/Reset-Revert').title;
  postGitInstance2: any = environment.postTitles.find(x => x.path === 'gitInstance/Diff-Patch');
  postGitInstance: any = environment.postTitles.find(x => x.path === 'gitInstance/Branch-Merge');
  postGitInitial: any = environment.postTitles.find(x => x.path === 'gitInitial');

  constructor() { }

  ngOnInit() {
  }

}
