import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloPostsRoutingModule } from './hello-posts-routing.module';
import { HelloPostsFileComponent } from './hello-posts-file/hello-posts-file.component';
import { HelloPostsComponentComponent } from './hello-posts-component/hello-posts-component.component';
import { HelloPostsMainComponent } from './hello-posts-main/hello-posts-main.component';
import { HelloPostsBindingComponent } from './hello-posts-binding/hello-posts-binding.component';
import { HelloPostsRouterComponent } from './hello-posts-router/hello-posts-router.component';
import { HelloPostsEnvironmentComponent } from './hello-posts-environment/hello-posts-environment.component';


@NgModule({
  declarations: [
    HelloPostsFileComponent,
    HelloPostsComponentComponent,
    HelloPostsMainComponent,
    HelloPostsBindingComponent,
    HelloPostsRouterComponent,
    HelloPostsEnvironmentComponent
  ],
  imports: [
    CommonModule,
    HelloPostsRoutingModule
  ]
})
export class HelloPostsModule { }
