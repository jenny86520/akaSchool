import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloPostsFileComponent } from './hello-posts-file/hello-posts-file.component';
import { HelloPostsComponentComponent } from './hello-posts-component/hello-posts-component.component';
import { HelloPostsBindingComponent } from './hello-posts-binding/hello-posts-binding.component';
import { HelloPostsRouterComponent } from './hello-posts-router/hello-posts-router.component';
import { HelloPostsEnvironmentComponent } from './hello-posts-environment/hello-posts-environment.component';


const routes: Routes = [
    {
    path: 'file',
    component: HelloPostsFileComponent,
    pathMatch: 'full'
  },
  {
    path: 'component',
    component: HelloPostsComponentComponent,
    pathMatch: 'full'
  },
  {
    path: 'binding',
    component: HelloPostsBindingComponent,
    pathMatch: 'full'
  },
  {
    path: 'router',
    component: HelloPostsRouterComponent,
    pathMatch: 'full'
  },
  {
    path: 'environment',
    component: HelloPostsEnvironmentComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloPostsRoutingModule { }
