import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { IEmployee } from '../../models/iemployee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styles: []
})
export class ListEmployeesComponent implements OnInit {
  employees!: IEmployee[];

  // 1. connect to the service using dependency injection
  constructor(private employeesService: EmployeesService) {
    console.log('Inside constructor');
  }

  // lifecycle hook
  ngOnInit() {
    // whenever the comp comes into view
    // ideal place for you to send a req to the REST API
    console.log('Inside ngOnInit');
    // 2. send the req to the service
    this.employeesService.getEmployees()
      .subscribe((res: IEmployee[]) => {
        // 3. get the response from the service
        console.log(res);
        this.employees = res;
      });
    
  }
  
}
