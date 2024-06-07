import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  const userService = inject(UserService);
  console.log('Checking if user is logged in' + userService.isLoggedIn());
  if (!userService.isLoggedIn() && !localStorage.getItem('token')) {
    console.log('User not logged in, redirecting to login page');
    router.navigate(['/login']);
    return false;
  }
  return true;
};
