import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcTagsComponent } from './evc-tags.component';

describe('EvcTagsComponent', () => {
  let component: EvcTagsComponent;
  let fixture: ComponentFixture<EvcTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvcTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
