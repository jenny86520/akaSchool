import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPostsRouterComponent } from './hello-posts-router.component';

describe('HelloPostsRouterComponent', () => {
  let component: HelloPostsRouterComponent;
  let fixture: ComponentFixture<HelloPostsRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloPostsRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloPostsRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
