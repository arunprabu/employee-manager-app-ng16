import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-testing-demo',
  templateUrl: './unit-testing-demo.component.html',
  styles: [
  ]
})
export class UnitTestingDemoComponent {
  // just for example sake -- Testing Method
  add(a: number, b: number) {
    return a + b;
  }
}
