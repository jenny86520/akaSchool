import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { HelloWebsiteComponent } from './hello-website/hello-website.component';
import { HelloPostsComponent } from './hello-posts/hello-posts.component';


@NgModule({
  declarations: [HomeComponent, HelloWorldComponent, HelloWebsiteComponent, HelloPostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
