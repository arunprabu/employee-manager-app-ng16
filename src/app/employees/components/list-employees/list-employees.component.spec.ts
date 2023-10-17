import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeesComponent } from './list-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeesService } from '../../services/employees.service';
import { of } from 'rxjs';

describe('ListEmployeesComponent', () => {
  let component: ListEmployeesComponent;
  let fixture: ComponentFixture<ListEmployeesComponent>;

  // steps for mocking
  /*
    1. Have the mock data of array with 2 objects
    2. Prepare for mocking a service's API method
      // 2.1 What's the service to mock? EmployeeService 
      // 2.2 What's the method to mock? getEmployees()
    3. provide the mock data for the service request
  */

  // setting up mock data
  const mockEmployeeList = [
    {
      id: 1,
      name: 'John Williams',
      phone: '32456789',
      email: 'j@k.com'
    },
    {
      id: 2,
      name: 'Steve Smith',
      phone: '789654323',
      email: 's@t.com'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEmployeesComponent],
      imports: [HttpClientModule, RouterTestingModule],
      // setting up mock
      providers: [
        {
          provide: EmployeesService,
          useValue: {
            // mocking getEmployees method to return mockEmployeeList data as observable
            getEmployees: () => of(mockEmployeeList)
          }
        }
      ]
    });
    fixture = TestBed.createComponent(ListEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // using timeout -- checking ajax call's response
  /* The following is bad test -- as it is connecting to the rest api*/
  /* 
  it('has 10 employees on load', ((done) => {
    component.ngOnInit();
    setTimeout(() => {
      expect(component.employees.length).toEqual(10);
      done();
    }, 4000);
  }));

  it('should display the employee Leanne Graham in h5', ((done) => {
    component.ngOnInit();
    setTimeout(() => {
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('h5').innerText).toBe(
        'Leanne Graham'
      );
      done();
    }, 4000);
  }));
  */

  /* Chellenges / Disdavantages of testing direct api request like the above
    1. Time Consuming
    2. Backend Rest api might have data inconsistencies
    3. Backend rest api might not be stable. or may still be in development

    So, What's the solution? Mocks, Spies 
  */

  it('should have an employees array with length 2', () => {
    expect(component.employees.length).toEqual(2);
  });

  it('should have employees from service [MOCKING API]', () => {
    expect(component.employees).toEqual(mockEmployeeList);
  });

});
