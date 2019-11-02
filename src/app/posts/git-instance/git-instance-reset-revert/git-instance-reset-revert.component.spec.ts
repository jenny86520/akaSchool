import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInstanceResetRevertComponent } from './git-instance-reset-revert.component';

describe('GitInstanceResetRevertComponent', () => {
  let component: GitInstanceResetRevertComponent;
  let fixture: ComponentFixture<GitInstanceResetRevertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitInstanceResetRevertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInstanceResetRevertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
