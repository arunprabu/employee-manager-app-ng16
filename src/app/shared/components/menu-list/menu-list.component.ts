import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  template: `
    <ul class="navbar-nav me-auto mb-2 mb-md-0">
      <li class="nav-item">
        <a class="nav-link" routerLink="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/concepts">Concepts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/employees">Employees</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/products">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/unit-testing-demo">Unit Testing Demo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/about-us">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/contact-us">Contact Us</a>
      </li>
      <ng-content></ng-content>
    </ul>
  `,
  styles: []
})
export class MenuListComponent {}
