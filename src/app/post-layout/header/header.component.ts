import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectPost: number;
  constructor(private router: Router) { }

  ngOnInit() {
    this.selectPost = 0;
  }

  goToPost() {
    switch (this.selectPost) {
      case 0:
        this.router.navigate(['/'], { skipLocationChange: true }); break;
      case 1:
        this.router.navigate(['/helloWorld'], { skipLocationChange: true }); break;
      case 2:
            this.router.navigate(['/startAngular'], { skipLocationChange: true }); break;
      default: console.log(this.selectPost);

    }

  }
}
