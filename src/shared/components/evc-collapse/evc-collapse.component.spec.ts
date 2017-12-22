import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { evcCollapseComponent } from './evc-collapse.component';

describe('evcCollapseComponent', () => {
  let component: evcCollapseComponent;
  let fixture: ComponentFixture<evcCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ evcCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(evcCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
