import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { AboutUsComponent } from './about-us/components/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/components/contact-us/contact-us.component';
import { ListEmployeesComponent } from './employees/components/list-employees/list-employees.component';
import { AddEmployeeComponent } from './employees/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/components/employee-details/employee-details.component';

// config the routing 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'employees', component: ListEmployeesComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/:employeeId', component: EmployeeDetailsComponent }, // employeeId is url param
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
