import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: []
})
export class AddEmployeeComponent {
  // Step 1: have form tag equivalent in TS
  addEmployeeForm!: FormGroup;
  isSaved = false;

  constructor(private employeesService: EmployeesService) {
    // step 1 continues...
    this.addEmployeeForm = new FormGroup({
      // Step 2: have form element equivalents in ts // for Step 3 -- refer html
      name: new FormControl('', Validators.required), // Step 5: Let's work on validation
      phone: new FormControl('', Validators.required), // for step 6 refer html
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  handleAddEmployee() {
    // get the form data
    console.log(this.addEmployeeForm.value);

    // 1. connect to the service using dependency injection -- refer constructor
    // 2. send the form data to the service
    this.employeesService.createEmployee(this.addEmployeeForm.value)
      .subscribe((res: any) => { // 3. get the response from the service
        console.log(res);
        if(res && res.id ){
          this.isSaved = true;
        }
      });
  }
}
