import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitInstanceBranchMergeComponent } from './git-instance-branch-merge/git-instance-branch-merge.component';
import { GitInstanceDiffPatchComponent } from './git-instance-diff-patch/git-instance-diff-patch.component';
import { GitInstanceResetRevertRebaseComponent } from './git-instance-reset-revert-rebase/git-instance-reset-revert-rebase.component';
import { GitInstanceStashTagComponent } from './git-instance-stash-tag/git-instance-stash-tag.component';


const routes: Routes = [
  {
    path: 'Branch-Merge',
    component: GitInstanceBranchMergeComponent
  },
  {
    path: 'Diff-Patch',
    component: GitInstanceDiffPatchComponent
  },
  {
    path: 'Reset-Revert-Rebase',
    component: GitInstanceResetRevertRebaseComponent
  },
  {
    path: 'Stash-Tag',
    component: GitInstanceStashTagComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitInstanceRoutingModule { }
