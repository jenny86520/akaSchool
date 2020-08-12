import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './post-layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
    // children: [
    //   {
    //     path: '',
    //     component: PostComponent,
    //   },
    // ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
