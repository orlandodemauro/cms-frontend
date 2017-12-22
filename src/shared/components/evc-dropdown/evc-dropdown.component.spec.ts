import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcDropdownComponent } from './evc-dropdown.component';

describe('EvcDropdownComponent', () => {
  let component: EvcDropdownComponent;
  let fixture: ComponentFixture<EvcDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
