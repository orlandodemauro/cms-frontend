import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcDocumentComponent } from './evc-document.component';

describe('EvcDocumentComponent', () => {
  let component: EvcDocumentComponent;
  let fixture: ComponentFixture<EvcDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
