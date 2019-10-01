import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  path: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(param => {
      this.path = param.get('post');
      this.router.navigate([this.path ? '/' + this.path : '/'], { queryParams: { post: this.path }, skipLocationChange: true });
    });
  }

}
