import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
    <div>
      <h1>Pipes Demo</h1>
      <h4>Uppercase and Lowercase Pipes</h4>
      <p>Without Pipe : {{ topic }}</p>
      <p>{{ topic | lowercase }}</p>
      <p>{{ topic | uppercase }}</p>
      <hr />
      <h4>Currency Pipe</h4>
      <p>{{ price | currency }}</p>
      <hr />

      <h4>Date Pipe</h4>
      <p>{{ today }}</p>
      <p>{{ today | date }}</p>
      <p>{{ today | date : 'short' }}</p>
      <p>{{ today | date : 'shortDate' }}</p>
      <p>{{ today | date : 'dd-MM-yyyy hh:mm:ss a' }}</p>
      <p>{{ today | date : 'MMM dd, yyyy hh:mm:ss a' }}</p>

      <h4>Chaining Pipes</h4>
      <p>{{ today | date : 'MMM dd, yyyy hh:mm:ss a' | uppercase }}</p>

      <h4>Custom Pipe</h4>
      <p>ng g p shared/pipes/ellipsis</p>
      <input type="text" [(ngModel)]="topic" />
      <p>{{ randomText }}</p>
      <p>{{ randomText | ellipsis }}</p>
      <!-- Parameterized Pipe -->
      <p>{{ randomText | ellipsis : 100 }}</p>
      <p>{{ randomText | ellipsis : 20 }}</p>
      <p>{{ randomText | ellipsis : 128 }}</p>
    </div>
  `,
  styles: []
})
export class AboutUsComponent {
  topic = 'Angular 16';
  price = 499;
  today = new Date();
  randomText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  Dicta libero doloribus porro nihil, 
  aspernatur quaerat ratione reiciendis 
  sequi obcaecati illum alias asperiores 
  sed officiis magnam esse dolorum eligendi, 
  beatae nulla.`;
}
