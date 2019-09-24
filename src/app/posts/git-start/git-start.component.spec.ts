import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitStartComponent } from './git-start.component';

describe('GitStartComponent', () => {
  let component: GitStartComponent;
  let fixture: ComponentFixture<GitStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
