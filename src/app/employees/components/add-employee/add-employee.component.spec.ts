import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeComponent } from './add-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Postive state of the form
  it('has valid form when all fields are properly filled', () => {
    component.addEmployeeForm?.controls['name'].setValue('John');
    component.addEmployeeForm?.controls['phone'].setValue('4354675898');
    component.addEmployeeForm?.controls['email'].setValue('a@g.com');
    expect(component.addEmployeeForm.valid).toBeTrue();
  });

  // Negative state of the form
  it('has invalid form when all fields are NOT properly filled', () => {
    component.addEmployeeForm?.controls['name'].setValue('');
    component.addEmployeeForm?.controls['phone'].setValue('');
    component.addEmployeeForm?.controls['email'].setValue('a');
    expect(component.addEmployeeForm.invalid).toBeTrue();
  });

  // Spying on one property handleAddEmployee
  // testing the submission logic -- spyOn
  it('should call handleAddEmployee method', () => {
    spyOn(component, 'handleAddEmployee');
    component.handleAddEmployee();
    expect(component.handleAddEmployee).toHaveBeenCalled();
  });

  // Let's test the handleAddEmployee method by triggering the click from html submit button
  it('should call handleAddEmployee when submit btn clicked with all fields filled', () => {
    // in order to enable the submit button fill all fields with proper data
    component.addEmployeeForm?.controls['name'].setValue('John');
    component.addEmployeeForm?.controls['phone'].setValue('4354675898');
    component.addEmployeeForm?.controls['email'].setValue('a@g.com');
    fixture.detectChanges(); // you must detect changes. only then submit btn can be identified in enabled state

    spyOn(component, 'handleAddEmployee');
    const submitBtn = fixture.debugElement.query(
      By.css('.submitBtn')
    ).nativeElement;
    submitBtn.click(); // we can click only if button is enabled
    expect(component.handleAddEmployee).toHaveBeenCalled();
  });

  // Refer for more: https://github.com/arunprabu/employee-mgmt-ng-oct2022/blob/master/src/app/employees/components/add-employee/add-employee.component.spec.ts
});
