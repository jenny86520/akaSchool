import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInstanceComponent } from './git-instance.component';

describe('GitInstanceComponent', () => {
  let component: GitInstanceComponent;
  let fixture: ComponentFixture<GitInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
