import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="row">
      <!-- Given a reference variable for the ngForm as loginForm -->
      <form
        class="col-md-6 offset-md-3"
        #loginForm="ngForm"
        (ngSubmit)="handleLogin(loginForm)"
      >
        <!-- Submit the form data through the handleLogin() method-->
        <h1 class="h3 mb-3 fw-normal">Please Login</h1>

        <!-- EMAIL INPUT -->
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="emailInput"
            placeholder="name@example.com"
            name="email"
            #email="ngModel"
            ngModel
            [ngClass]="{
              'is-invalid': email.touched && email.invalid
            }"
            required
            email
          />
          <label for="emailInput">Email address</label>
          <!-- displaying validation related messages for email -->
          <div class="invalid-feedback">
            <!-- checking with required -->
            <div *ngIf="email.errors?.['required']">Email is Required</div>
            <!-- checking for valid email -->
            <div *ngIf="email.errors?.['email']">Email seems to be invalid</div>
          </div>
        </div>

        <!-- PASSWORD INPUT -->
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="passwordInput"
            placeholder="Password"
            name="password"
            #password="ngModel"
            ngModel
            [ngClass]="{
              'is-invalid': password.touched && password.invalid
            }"
            required
            minlength="6"
          />
          <label for="passwordInput">Password</label>
          <!-- displaying validation related messages for password -->
          <div class="invalid-feedback">
            <!-- checking with password required -->
            <div *ngIf="password.errors?.['required']">
              Password is Required
            </div>
            <!-- checking for minimum characters in the password -->
            <div *ngIf="password.errors?.['minlength']">
              Password should have minimum 6 characters
            </div>
          </div>
        </div>

        <!-- disabling the submit button when the form is invalid -->
        <button
          class="w-100 btn btn-lg btn-primary"
          type="submit"
          [disabled]="loginForm.invalid"
        >
          Login
        </button>
        <div class="mt-3">
          <!-- If not registered can navigate to signup page -->
          <p>
            Not Registered?
            <a routerLink="/auth/signup" style="color: blue; cursor: pointer">
              Signup Now for Free
            </a>
          </p>
        </div>
      </form>
    </div>
  `,
  styles: []
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  handleLogin(formState: any) {
    console.log(formState); // you can eveything about the entire form
    console.log(formState.value); // entered email and password
    // connect with service using dep injection
    // send the form data to the service
    // get the response from the service
    console.log('Inside handle Login');
    this.authService.login(formState.value).subscribe((res: any) => {
      console.log(res);
      // store the JWT token in either cookie or local storage or session storage
      sessionStorage.setItem('authToken', res.token);
      // POST LOGIN, redirect the user to the target url by reading query param from url
      const redirectToUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
      console.log(redirectToUrl);
      this.router.navigateByUrl(redirectToUrl);
    });
  }
}
