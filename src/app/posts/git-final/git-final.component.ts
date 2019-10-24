import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-git-final',
  templateUrl: './git-final.component.html',
  styleUrls: ['./git-final.component.css']
})
export class GitFinalComponent implements OnInit {
  title: string = environment.postTitles.find(x => x.path === 'gitFinal').title;
  constructor() { }

  ngOnInit() {
  }

}
