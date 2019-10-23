import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-git-instance-reset-revert-rebase',
  templateUrl: './git-instance-reset-revert-rebase.component.html',
  styleUrls: ['./git-instance-reset-revert-rebase.component.css']
})
export class GitInstanceResetRevertRebaseComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'gitInstance/Reset-Revert-Rebase').title;
  constructor() { }

  ngOnInit() {
  }

}
