import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IEmployee } from '../models/iemployee';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) {
    console.log('Inside EmployeesService Constructor');
  }

  // CREATE
  createEmployee(formData: IEmployee): Observable<IEmployee> {
    // 1. get the form data from comp
    console.log(formData);
    // 2. send the form data to the rest api
    // 2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2.2 What's the HTTP Method? POST
    // 2.3 What's the REST API Client Tool? HttpClient
    return this.http
      .post<IEmployee>('https://jsonplaceholder.typicode.com/users', formData)
      .pipe(
        map((res: IEmployee) => {
          // 3. get the response from the rest api
          console.log(res);
          return res; // 4. send the response to the comp
        })
      );
  }

  // READ
  // 1. get the req from the comp
  getEmployees(): Observable<IEmployee[]> {
    console.log('inside getEmployees');
    // 2. send the req to the REST API
    // 2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2.2 What's the HTTP Method? GET
    // 2.3 What's the REST API Client Tool? HttpClient
    return this.http
      .get<IEmployee[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((res: IEmployee[]) => {
          // ideal place for us to alter the data -- filter, remove, sort, convert, add, transform, manipulate
          // 3. get the res from the REST API
          console.log(res);
          return res; // 4. send the res to the component
        })
      );
  }

  // READ
  // 1. get the req from the comp -- get the employee id
  getEmployeeById(employeeId: string | null) {
    console.log(employeeId);
    // 2. send the req to the REST API
    // 2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users/1
    // 2.2 What's the HTTP Method? GET
    // 2.3 What's the REST API Client Tool? HttpClient

    return this.http.get(
      `https://jsonplaceholder.typicode.com/users/${employeeId}`
    );
    // returning the response
  }

  // UPDATE
  updateEmployee(employee: IEmployee) {
    console.log(employee);
    return this.http.put(
      `https://jsonplaceholder.typicode.com/users/${employee.id}`,
      employee
    );
  }
}