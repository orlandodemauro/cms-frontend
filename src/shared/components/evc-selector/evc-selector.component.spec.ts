import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcSelectorComponent } from './evc-selector.component';

describe('EvcSelectorComponent', () => {
  let component: EvcSelectorComponent;
  let fixture: ComponentFixture<EvcSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
