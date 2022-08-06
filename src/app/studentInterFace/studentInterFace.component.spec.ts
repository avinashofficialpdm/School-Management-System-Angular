/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentInterFaceComponent } from './studentInterFace.component';

describe('StudentInterFaceComponent', () => {
  let component: StudentInterFaceComponent;
  let fixture: ComponentFixture<StudentInterFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInterFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInterFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
