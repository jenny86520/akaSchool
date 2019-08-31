import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPostsComponent } from './hello-posts.component';

describe('HelloPostsComponent', () => {
  let component: HelloPostsComponent;
  let fixture: ComponentFixture<HelloPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
