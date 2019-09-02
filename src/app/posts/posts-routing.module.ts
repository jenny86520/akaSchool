import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { HelloWebsiteComponent } from './hello-website/hello-website.component';
import { HelloPostsFileComponent } from './hello-posts-file/hello-posts-file.component';


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
    children: [{
      path: 'file',
      component: HelloPostsFileComponent,
      pathMatch: 'full'
    }]
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
