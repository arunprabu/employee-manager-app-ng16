import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reports',
  template: `
    <div class="text-bg-secondary p-3">
      <h3>Generate Report | This is Child Component</h3>
      <button class="btn btn-warning" (click)="handleGenerateReport()">
        GENERATE REPORT
      </button>
    </div>
  `,
  styles: []
})
export class ReportsComponent {
  // Step 1: create a variable and make it a custom event 
  // Step 1.1 Let's create an object for EventEmitter class 
  // Step 1.2 Let's make it a custom event
  @Output() reportGenerated: EventEmitter<any> = new EventEmitter();

  handleGenerateReport() {
    console.log('Report will be generated');
    // Step 2: Let's trigger / emit reportGenerated event through program
    this.reportGenerated.emit({
      status: 'Report generated. Report Id: 324567364756'
    });
    // for Step 3 -- refer concepts.comp.html
  }
}
