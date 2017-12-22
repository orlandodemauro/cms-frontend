import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcCardListComponent } from './evc-card-list.component';

describe('EvcCardListComponent', () => {
  let component: EvcCardListComponent;
  let fixture: ComponentFixture<EvcCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
