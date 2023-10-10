import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) {
    console.log('Inside EmployeesService Constructor');
  }

  // CREATE
  createEmployee(formData: any) {
    // 1. get the form data from comp
    console.log(formData);
    // 2. send the form data to the rest api
    // 2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2.2 What's the HTTP Method? POST
    // 2.3 What's the REST API Client Tool? HttpClient
    return this.http
      .post('https://jsonplaceholder.typicode.com/6345789', formData)
      .pipe(
        map((res: any) => {
          // 3. get the response from the rest api
          console.log(res);
          return res; // 4. send the response to the comp
        })
      );
  }

  // READ
  // 1. get the req from the comp
  getEmployees() {
    console.log('inside getEmployees');
    // 2. send the req to the REST API
    // 2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2.2 What's the HTTP Method? GET
    // 2.3 What's the REST API Client Tool? HttpClient
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((res: any) => {
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

    return this.http.get(`https://jsonplaceholder.typicode.com/users/${employeeId}`);
      // returning the response
  }

  // UPDATE
  updateEmployee(employee: any) {
    console.log(employee);
    return this.http.put(
      `https://jsonplaceholder.typicode.com/users/${employee.id}`,
      employee
    );
  }
}