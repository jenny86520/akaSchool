import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInstanceStashTagComponent } from './git-instance-stash-tag.component';

describe('GitInstanceStashTagComponent', () => {
  let component: GitInstanceStashTagComponent;
  let fixture: ComponentFixture<GitInstanceStashTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitInstanceStashTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInstanceStashTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
