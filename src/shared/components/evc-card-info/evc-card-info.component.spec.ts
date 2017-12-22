import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcContactCardComponent } from './evc-contact-card.component';

describe('EvcContactCardComponent', () => {
  let component: EvcContactCardComponent;
  let fixture: ComponentFixture<EvcContactCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcContactCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
