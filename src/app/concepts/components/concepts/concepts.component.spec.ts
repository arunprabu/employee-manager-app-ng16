import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsComponent } from './concepts.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { ReportsComponent } from '../reports/reports.component';
import { FormsModule } from '@angular/forms';

describe('ConceptsComponent', () => {
  let component: ConceptsComponent;
  let fixture: ComponentFixture<ConceptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConceptsComponent, UserInfoComponent, ReportsComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(ConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
