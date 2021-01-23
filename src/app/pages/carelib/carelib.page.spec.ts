import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarelibPage } from './carelib.page';

describe('CarelibPage', () => {
  let component: CarelibPage;
  let fixture: ComponentFixture<CarelibPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarelibPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarelibPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
