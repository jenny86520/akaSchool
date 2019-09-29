import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { HelloWebsiteComponent } from './hello-website/hello-website.component';
import { GitStartComponent } from './git-start/git-start.component';
import { GitInstallComponent } from './git-install/git-install.component';
import { GitInitialComponent } from './git-initial/git-initial.component';


@NgModule({
  declarations: [HomeComponent, HelloWorldComponent, HelloWebsiteComponent, GitStartComponent, GitInstallComponent, GitInitialComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
