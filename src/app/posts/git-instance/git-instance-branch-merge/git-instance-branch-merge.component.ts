import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-git-instance-branch-merge',
  templateUrl: './git-instance-branch-merge.component.html',
  styleUrls: ['./git-instance-branch-merge.component.css']
})
export class GitInstanceBranchMergeComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'gitInstance/Branch-Merge').title;
  postGitInitial: any = environment.postTitles.find(x => x.path === 'gitInitial');
  constructor() { }

  ngOnInit() {
  }

}
