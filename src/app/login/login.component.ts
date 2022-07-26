import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { UserLoginService } from '../service/userLogin.service';
import { userLogin } from '../model/userLogin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  User: any = userLogin;
  message: any;
  status = 0;
  constructor(
    private socialAuthService: SocialAuthService,
    private userLoginService: UserLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public addUser(f: any) {
    this.status = 1;
    this.message = 'Sign Up successful. Login using below link';
    this.User = {
      email: f.emails,
      userName: f.fullname,
      password: f.password,
    };

    console.log(this.User);
    this.userLoginService.addUserLoginDetails(this.User).subscribe((data) => {
      console.log('POST SUCCESS');
      console.log(data);
    });
  }
}
