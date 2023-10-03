import { Component } from '@angular/core';

@Component({
  selector: 'app-footer', // element selector
  template: `
    <footer class="text-center">
      <hr />
      <app-menu-list>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu-list>
      <p class="bold-text" style="font-size: 12px;">
        Copyright {{ copyrightYear }} | Arun
      </p>
    </footer>
  `,
  styles: [
    `
      .bold-text {
        font-weight: bold;
      }
    `
  ]
})
export class FooterComponent {
  copyrightYear = 2023;
}
