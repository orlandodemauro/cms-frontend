import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcGroupModalComponent } from './evc-group-modal.component';

describe('EvcGroupModalComponent', () => {
  let component: EvcGroupModalComponent;
  let fixture: ComponentFixture<EvcGroupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcGroupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
