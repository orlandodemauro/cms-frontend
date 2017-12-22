import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { evcSearchComponent } from './evc-search.component';

describe('SearchComponent', () => {
  let component: evcSearchComponent;
  let fixture: ComponentFixture<evcSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ evcSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(evcSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
