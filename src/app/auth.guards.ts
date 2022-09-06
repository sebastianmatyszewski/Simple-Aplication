import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, Role, ROLE } from './auth.service';

interface data {
  roles: Role[];
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const data: data = route.data as data;
    if (
      this.authService.LoginStatus &&
      data.roles.includes(this.authService.Role)
    ) {
      return this.authService.LoginStatus;
    }
    this.router.navigate(['login']);
    return false;
  }
}
