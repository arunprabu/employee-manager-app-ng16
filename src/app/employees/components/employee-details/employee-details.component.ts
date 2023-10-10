import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;
  duplicateEmployee: any;
  isUpdated = false;

  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // lifecycle hook
    // whenever the comp is coming into view -- this will be called.
    // ideal place for you to make rest api call
    // Let's read the URL Param
    const employeeId: string | null =
      this.route.snapshot.paramMap.get('employeeId');
    console.log(employeeId);

    console.log('Inside ngOnInit');
    this.employeesService.getEmployeeById(employeeId).subscribe((res: any) => {
      console.log(res);
      this.employee = res;
    });
  }

  handleEditModalOpen() {
    // duplicating object using spread operator
    this.duplicateEmployee = {
      ...this.employee
    };
    this.isUpdated = false;
  }

  handleUpdateEmployee() {
    // let's read updated form data
    console.log(this.duplicateEmployee);
    this.employeesService.updateEmployee(this.duplicateEmployee)  
      .subscribe( (res: any) => {
        console.log(res);
        this.employee = res;
        this.isUpdated = true;
      });
  }
}
