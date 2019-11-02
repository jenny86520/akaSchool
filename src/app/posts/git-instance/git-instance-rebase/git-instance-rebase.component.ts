import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-git-instance-rebase',
  templateUrl: './git-instance-rebase.component.html',
  styleUrls: ['./git-instance-rebase.component.css']
})
export class GitInstanceRebaseComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'gitInstance/Rebase').title;
  constructor() { }

  ngOnInit() {
  }

}
