import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Evc2colCardComponent } from './evc-2col-card.component';

describe('Evc2colCardComponent', () => {
  let component: Evc2colCardComponent;
  let fixture: ComponentFixture<Evc2colCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Evc2colCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Evc2colCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
