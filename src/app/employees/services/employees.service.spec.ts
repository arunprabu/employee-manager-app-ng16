import { TestBed } from '@angular/core/testing';

import { EmployeesService } from './employees.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('EmployeesService', () => {
  let service: EmployeesService;
  // setup spy 
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(EmployeesService);
  });

  // setting up spy
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new EmployeesService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return employees when getEmployees method called', ( (done) => {
    // mock data
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

    httpClientSpy.get.and.returnValue(of(mockEmployeeList));

    service.getEmployees()
      .subscribe((res) => {
        expect(res).toEqual(mockEmployeeList);
        expect(res.length).toEqual(2);
        done();
      });
  }));
  
  
});
