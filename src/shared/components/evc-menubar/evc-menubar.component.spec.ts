import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcMenubarComponent } from './evc-menubar.component';

describe('EvcMenubarComponent', () => {
  let component: EvcMenubarComponent;
  let fixture: ComponentFixture<EvcMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
