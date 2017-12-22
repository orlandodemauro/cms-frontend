import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcTabsComponent } from './evc-tabs.component';

describe('EvcTabsComponent', () => {
  let component: EvcTabsComponent;
  let fixture: ComponentFixture<EvcTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
