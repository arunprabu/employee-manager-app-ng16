import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent {
  counter = 0;

  handleIncrement() {
    this.counter++;
  }

  handleDecrement() {
    this.counter--;
  }
}
