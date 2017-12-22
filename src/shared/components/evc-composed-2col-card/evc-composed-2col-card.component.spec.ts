import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcComposed2colCardComponent } from './evc-composed-2col-card.component';

describe('EvcComposed2colCardComponent', () => {
  let component: EvcComposed2colCardComponent;
  let fixture: ComponentFixture<EvcComposed2colCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcComposed2colCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcComposed2colCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
