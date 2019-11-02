import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitInstanceRoutingModule } from './git-instance-routing.module';
import { GitInstanceBranchMergeComponent } from './git-instance-branch-merge/git-instance-branch-merge.component';
import { GitInstanceDiffPatchComponent } from './git-instance-diff-patch/git-instance-diff-patch.component';
import { GitInstanceResetRevertComponent } from './git-instance-reset-revert/git-instance-reset-revert.component';
import { GitInstanceStashTagComponent } from './git-instance-stash-tag/git-instance-stash-tag.component';
import { GitInstanceRebaseComponent } from './git-instance-rebase/git-instance-rebase.component';

@NgModule({
  declarations: [
    GitInstanceBranchMergeComponent,
    GitInstanceDiffPatchComponent,
    GitInstanceResetRevertComponent,
    GitInstanceStashTagComponent,
    GitInstanceRebaseComponent
  ],
  imports: [
    CommonModule,
    GitInstanceRoutingModule
  ]
})
export class GitInstanceModule { }
