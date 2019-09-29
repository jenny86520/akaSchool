import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInitialComponent } from './git-initial.component';

describe('GitInitialComponent', () => {
  let component: GitInitialComponent;
  let fixture: ComponentFixture<GitInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
