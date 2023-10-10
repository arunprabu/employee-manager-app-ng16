import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { RouterModule, Routes } from '@angular/router';

// routing config for the employees feature
const routes: Routes = [
  { path: 'employees', component: ListEmployeesComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/:employeeId', component: EmployeeDetailsComponent } // employeeId is url param
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)], // registering routes
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
