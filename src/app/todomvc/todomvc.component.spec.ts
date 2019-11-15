/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodomvcComponent } from './todomvc.component';

describe('TodomvcComponent', () => {
  let component: TodomvcComponent;
  let fixture: ComponentFixture<TodomvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodomvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodomvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
