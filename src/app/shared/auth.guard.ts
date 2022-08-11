import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from '../service/userLogin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userLoginService: UserLoginService,
    private router: Router
  ) {}
  canActivate() {
    if (this.userLoginService.IsLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl['/sign-in'];
      return false;
    }
  }
}
