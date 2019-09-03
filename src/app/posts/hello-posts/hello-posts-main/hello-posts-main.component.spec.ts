import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPostsMainComponent } from './hello-posts-main.component';

describe('HelloPostsMainComponent', () => {
  let component: HelloPostsMainComponent;
  let fixture: ComponentFixture<HelloPostsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloPostsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloPostsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
