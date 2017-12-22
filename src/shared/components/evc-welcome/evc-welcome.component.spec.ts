import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcWelcomeComponent } from './evc-welcome.component';

describe('EvcWelcomeComponent', () => {
  let component: EvcWelcomeComponent;
  let fixture: ComponentFixture<EvcWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});