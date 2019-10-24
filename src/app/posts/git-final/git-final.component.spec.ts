import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFinalComponent } from './git-final.component';

describe('GitFinalComponent', () => {
  let component: GitFinalComponent;
  let fixture: ComponentFixture<GitFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
