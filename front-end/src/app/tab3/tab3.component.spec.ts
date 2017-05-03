/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tab3Component } from './tab3.component';

describe('Tab3Component', () => {
  let component: Tab3Component;
  let fixture: ComponentFixture<Tab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
