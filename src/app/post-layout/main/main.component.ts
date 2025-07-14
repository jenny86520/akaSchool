import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare let $: any;
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    standalone: false
})
export class MainComponent implements OnInit {
  path: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(param => {
      this.path = param.get('post');
      this.router.navigate([this.path ? '/' + this.path : '/'], { queryParams: { post: this.path }, skipLocationChange: true });
    });

    /* 按下GoTop按鈕時的事件 */
    $('#gotop').click(function () {
      $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
      return false;
    });

    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        $('#gotop').fadeIn();
      } else {
        $('#gotop').fadeOut();
      }
    });

  }

}
