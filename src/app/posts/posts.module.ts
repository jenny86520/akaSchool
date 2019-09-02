import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { HelloWebsiteComponent } from './hello-website/hello-website.component';
import { HelloPostsFileComponent } from './hello-posts-file/hello-posts-file.component';


@NgModule({
  declarations: [HomeComponent, HelloWorldComponent, HelloWebsiteComponent, HelloPostsFileComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
