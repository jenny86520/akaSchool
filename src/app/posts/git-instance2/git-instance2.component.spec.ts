import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInstance2Component } from './git-instance2.component';

describe('GitInstance2Component', () => {
  let component: GitInstance2Component;
  let fixture: ComponentFixture<GitInstance2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitInstance2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInstance2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
