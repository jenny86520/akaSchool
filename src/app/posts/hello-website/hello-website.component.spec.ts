import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWebsiteComponent } from './hello-website.component';

describe('HelloWebsiteComponent', () => {
  let component: HelloWebsiteComponent;
  let fixture: ComponentFixture<HelloWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
