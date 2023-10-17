import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingDemoComponent } from './unit-testing-demo.component';
import { CounterComponent } from '../counter/counter.component';

describe('UnitTestingDemoComponent', () => {
  let component: UnitTestingDemoComponent;
  let fixture: ComponentFixture<UnitTestingDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitTestingDemoComponent, CounterComponent]
    });
    fixture = TestBed.createComponent(UnitTestingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create proper UnitTestingDemoComponent', () => {
    expect(component).toBeTruthy();
  });

  // TESTING Method
  it('has add method which add two numbers properly', () => {
    expect(component.add(10, 20)).toEqual(30);
    expect(component.add(40, 50)).toEqual(90);
    expect(component.add(50, 10)).toEqual(60);
  });

  // Testing HTML
  it('has heading Unit Testing Demo in html', () => {
    const divElement = fixture.nativeElement as HTMLElement; // taking up the comp html for testing
    // Let's find the h1 inside divElement
    const heading1 = divElement.querySelector('h1');
    expect(heading1?.textContent).toBe('Unit Testing Demo!');
  });
});
