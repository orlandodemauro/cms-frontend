import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { crHeaderComponent } from './cr-header.component';

describe('HeaderComponent', () => {
  let component: crHeaderComponent;
  let fixture: ComponentFixture<crHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ crHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(crHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
