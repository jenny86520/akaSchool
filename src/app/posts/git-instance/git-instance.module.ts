import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitInstanceRoutingModule } from './git-instance-routing.module';
import { GitInstanceBranchMergeComponent } from './git-instance-branch-merge/git-instance-branch-merge.component';
import { GitInstanceDiffPatchComponent } from './git-instance-diff-patch/git-instance-diff-patch.component';
import { GitInstanceResetRevertRebaseComponent } from './git-instance-reset-revert-rebase/git-instance-reset-revert-rebase.component';
import { GitInstanceStashTagComponent } from './git-instance-stash-tag/git-instance-stash-tag.component';

@NgModule({
  declarations: [
    GitInstanceBranchMergeComponent,
    GitInstanceDiffPatchComponent,
    GitInstanceResetRevertRebaseComponent,
    GitInstanceStashTagComponent
  ],
  imports: [
    CommonModule,
    GitInstanceRoutingModule
  ]
})
export class GitInstanceModule { }
