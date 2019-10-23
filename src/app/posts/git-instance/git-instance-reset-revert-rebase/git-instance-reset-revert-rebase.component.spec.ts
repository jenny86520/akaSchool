import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInstanceResetRevertRebaseComponent } from './git-instance-reset-revert-rebase.component';

describe('GitInstanceResetRevertRebaseComponent', () => {
  let component: GitInstanceResetRevertRebaseComponent;
  let fixture: ComponentFixture<GitInstanceResetRevertRebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitInstanceResetRevertRebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInstanceResetRevertRebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
