import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloPostsRoutingModule } from './hello-posts-routing.module';
import { HelloPostsFileComponent } from './hello-posts-file/hello-posts-file.component';
import { HelloPostsComponentComponent } from './hello-posts-component/hello-posts-component.component';
import { HelloPostsMainComponent } from './hello-posts-main/hello-posts-main.component';
import { HelloPostsBindingComponent } from './hello-posts-binding/hello-posts-binding.component';


@NgModule({
  declarations: [HelloPostsFileComponent, HelloPostsComponentComponent, HelloPostsMainComponent, HelloPostsBindingComponent],
  imports: [
    CommonModule,
    HelloPostsRoutingModule
  ]
})
export class HelloPostsModule { }
