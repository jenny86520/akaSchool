import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInstallComponent } from './git-install.component';

describe('GitInstallComponent', () => {
  let component: GitInstallComponent;
  let fixture: ComponentFixture<GitInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
