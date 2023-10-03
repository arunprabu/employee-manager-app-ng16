import { Component } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent {
  // interpolation related
  appName = 'Employee Manager App';

  // property binding
  companyName = 'Cognizant';

  // two way binding
  courseName = 'Angular 16';

  // custom property binding 
  myAge = 25;
  
  // event binding
  handleClickMe(event: any) {
    console.log(event);
    event.target.innerText = 'Clicked';
  }
}
