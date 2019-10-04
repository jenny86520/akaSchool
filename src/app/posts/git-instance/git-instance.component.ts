import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-git-instance',
  templateUrl: './git-instance.component.html',
  styleUrls: ['./git-instance.component.css']
})
export class GitInstanceComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'gitInstance').title;
  postGitInitial: any = environment.postTitles.find(x => x.path === 'gitInitial');
  constructor() { }

  ngOnInit() {
  }

}
