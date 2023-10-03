import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  template: `
    <div class="text-bg-secondary p-3">
      <p>User Age: {{age}}</p>
    </div>
  `,
  styles: [
  ]
})
export class UserInfoComponent {
  // creating custom property
  @Input() age = 20; // @Input() will make it as custom property
}
