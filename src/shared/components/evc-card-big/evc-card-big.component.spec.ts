import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcCardBigComponent } from './evc-card-big.component';

describe('EvcCardBigComponent', () => {
  let component: EvcCardBigComponent;
  let fixture: ComponentFixture<EvcCardBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcCardBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcCardBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
