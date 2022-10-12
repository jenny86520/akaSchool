import { PostComponent } from './../post/post.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { GitStartComponent } from "./git-start/git-start.component";
import { GitInstallComponent } from "./git-install/git-install.component";
import { GitInitialComponent } from "./git-initial/git-initial.component";
import { GitFinalComponent } from "./git-final/git-final.component";

@NgModule({
  declarations: [
    PostComponent,
    GitStartComponent,
    GitInstallComponent,
    GitInitialComponent,
    GitFinalComponent,
  ],
  imports: [CommonModule, PostsRoutingModule],
})
export class PostsModule {}
