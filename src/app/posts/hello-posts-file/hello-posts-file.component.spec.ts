import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPostsFileComponent } from './hello-posts-file.component';

describe('HelloPostsFileComponent', () => {
  let component: HelloPostsFileComponent;
  let fixture: ComponentFixture<HelloPostsFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloPostsFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloPostsFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
