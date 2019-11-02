import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInstanceRebaseComponent } from './git-instance-rebase.component';

describe('GitInstanceRebaseComponent', () => {
  let component: GitInstanceRebaseComponent;
  let fixture: ComponentFixture<GitInstanceRebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitInstanceRebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInstanceRebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
