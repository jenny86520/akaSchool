import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperLeftComponent } from './wrapper-left.component';

describe('WrapperLeftComponent', () => {
  let component: WrapperLeftComponent;
  let fixture: ComponentFixture<WrapperLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
