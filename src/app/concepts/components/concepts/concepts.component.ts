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
  // Step 5 of Custom Event Binding -- storing the date in a variable
  dataReceivedChildComp: any;
  // for conditional rendering
  isLoggedIn = false;
  // for looping thru
  skills = ['ng', 'html', 'css', 'js'];

  // event binding
  handleClickMe(event: any) {
    console.log(event);
    event.target.innerText = 'Clicked';
  }

  // Step 4 of Custom Event Binding
  handleReportGenerated(event: any) {
    // event will carry data sent by child comp
    console.log('calling the method from parent comp');
    console.log(event);
    this.dataReceivedChildComp = event;
  }
}
