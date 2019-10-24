import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-git-instance-stash-tag',
  templateUrl: './git-instance-stash-tag.component.html',
  styleUrls: ['./git-instance-stash-tag.component.css']
})
export class GitInstanceStashTagComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'gitInstance/Stash-Tag').title;
  constructor() { }

  ngOnInit() {
  }

}
