import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPostsComponentComponent } from './hello-posts-component.component';

describe('HelloPostsComponentComponent', () => {
  let component: HelloPostsComponentComponent;
  let fixture: ComponentFixture<HelloPostsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloPostsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloPostsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
