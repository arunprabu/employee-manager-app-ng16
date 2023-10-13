import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { RouterModule, Routes } from '@angular/router';

// routing config for the employees feature
const routes: Routes = [
  { path: '', component: ListEmployeesComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: ':employeeId', component: EmployeeDetailsComponent } // employeeId is url param
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)], // registering routes
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
