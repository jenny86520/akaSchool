import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloPostsFileComponent } from './hello-posts-file/hello-posts-file.component';
import { HelloPostsComponentComponent } from './hello-posts-component/hello-posts-component.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloPostsRoutingModule { }
