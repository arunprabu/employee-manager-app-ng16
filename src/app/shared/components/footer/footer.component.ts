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
      <p>Copyright 2023 | Arun</p>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}
