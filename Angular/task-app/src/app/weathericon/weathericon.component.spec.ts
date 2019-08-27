import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathericonComponent } from './weathericon.component';

describe('WeathericonComponent', () => {
  let component: WeathericonComponent;
  let fixture: ComponentFixture<WeathericonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathericonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathericonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
