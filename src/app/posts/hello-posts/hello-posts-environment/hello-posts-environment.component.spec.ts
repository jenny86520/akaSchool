import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPostsEnvironmentComponent } from './hello-posts-environment.component';

describe('HelloPostsEnvironmentComponent', () => {
  let component: HelloPostsEnvironmentComponent;
  let fixture: ComponentFixture<HelloPostsEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloPostsEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloPostsEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
