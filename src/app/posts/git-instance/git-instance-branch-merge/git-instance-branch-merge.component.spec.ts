import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInstanceBranchMergeComponent } from './git-instance-branch-merge.component';

describe('GitInstanceComponent', () => {
  let component: GitInstanceBranchMergeComponent;
  let fixture: ComponentFixture<GitInstanceBranchMergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitInstanceBranchMergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInstanceBranchMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
