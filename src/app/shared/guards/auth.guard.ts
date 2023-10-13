import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // check whether the user is already logged in or not
  /* if yes 
      return true; 
    otherwise
      redirect to login page 
      return false;
   */

  console.log(route);
  console.log(state);

  const authService = inject(AuthService); // Dependency injection in a fn in angular
  const router = inject(Router);

  if (authService.isAuth()) {
    return true;
  } else {
    // redirect to login page
    router.navigate(['/auth/login'], {
      queryParams: { redirectTo: state.url }
    });
    return false;
  }
};
