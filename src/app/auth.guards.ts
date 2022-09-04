import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.authService.LoginStatus) {
      this.router.navigate(['login']);
    }
    return this.authService.LoginStatus;
  }

  // constructor(private authService: AuthService, private router: Router) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean | Promise<boolean> {
  //   var isAuthenticated = this.authService.getLoginStatus();
  //   if (!isAuthenticated) {
  //     this.router.navigate(['/login']);
  //   }

  //   return isAuthenticated;
  // }
}
