import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcTabsPanelComponent } from './evc-tabs-panel.component';

describe('EvcTabsPanelComponent', () => {
  let component: EvcTabsPanelComponent;
  let fixture: ComponentFixture<EvcTabsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcTabsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcTabsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
