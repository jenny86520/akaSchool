import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { HelloWebsiteComponent } from './hello-website/hello-website.component';
import { GitStartComponent } from './git-start/git-start.component';
import { GitInstallComponent } from './git-install/git-install.component';
import { GitInitialComponent } from './git-initial/git-initial.component';
import { GitInstanceComponent } from './git-instance/git-instance.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'helloWorld',
    component: HelloWorldComponent
  },
  {
    path: 'helloWebsite',
    component: HelloWebsiteComponent
  },
  {
    path: 'helloPosts',
    loadChildren: () => import('./hello-posts/hello-posts.module').then(m => m.HelloPostsModule)
  },
  {
    path: 'gitStart',
    component: GitStartComponent
  },
  {
    path: 'gitInstall',
    component: GitInstallComponent
  },
  {
    path: 'gitInitial',
    component: GitInitialComponent
  },
  {
    path: 'gitInstance',
    component: GitInstanceComponent
  },
  {
    path: '**',
    component: null
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
