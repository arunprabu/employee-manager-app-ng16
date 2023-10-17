import { Component } from '@angular/core';

// Decorator 
@Component({
  selector: 'app-root', // exposing the entire component in element selector
  templateUrl: './app.component.html', // html -- must be only one
  styleUrls: ['./app.component.css'] // css -- optional -- can be multiple
})
export class AppComponent {
  // ts
  title = 'Employee Manager!';
}
