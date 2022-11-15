import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addstudentComponent } from './add-student.component';

describe('addstudentComponent', () => {
  let component: addstudentComponent;
  let fixture: ComponentFixture<addstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addstudentComponent ]
    }) 
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
