import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcCardComponent } from './evc-card.component';

describe('EvcCardComponent', () => {
  let component: EvcCardComponent;
  let fixture: ComponentFixture<EvcCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
