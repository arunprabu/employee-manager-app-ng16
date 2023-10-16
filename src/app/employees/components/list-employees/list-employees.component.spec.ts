import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeesComponent } from './list-employees.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListEmployeesComponent', () => {
  let component: ListEmployeesComponent;
  let fixture: ComponentFixture<ListEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEmployeesComponent],
      imports: [
        HttpClientModule
      ]
    });
    fixture = TestBed.createComponent(ListEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
