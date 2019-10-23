import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInstanceDiffPatchComponent } from './git-instance-diff-patch.component';

describe('GitInstanceDiffPatchComponent', () => {
  let component: GitInstanceDiffPatchComponent;
  let fixture: ComponentFixture<GitInstanceDiffPatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitInstanceDiffPatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInstanceDiffPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
