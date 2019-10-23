import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-git-instance-diff-patch',
  templateUrl: './git-instance-diff-patch.component.html',
  styleUrls: ['./git-instance-diff-patch.component.css']
})
export class GitInstanceDiffPatchComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'gitInstance/Diff-Patch').title;
  postGitInstance: any = environment.postTitles.find(x => x.path === 'gitInstance/Branch-Merge');
  postGitInitial: any = environment.postTitles.find(x => x.path === 'gitInitial');
  postGitInstall: any = environment.postTitles.find(x => x.path === 'gitInstall');

  constructor() { }

  ngOnInit() {
  }

}
