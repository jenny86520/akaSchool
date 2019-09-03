import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPostsBindingComponent } from './hello-posts-binding.component';

describe('HelloPostsBindingComponent', () => {
  let component: HelloPostsBindingComponent;
  let fixture: ComponentFixture<HelloPostsBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloPostsBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloPostsBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
