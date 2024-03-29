import { Component, Inject, NgZone, OnInit, Renderer2 } from '@angular/core';
import {
  SocialAuthService,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { UserLoginService } from '../service/userLogin.service';
import { userLogin } from '../model/userLogin.model';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  User: any = userLogin;
  message: any;
  status = 0;
  gUser: any;
  // auth2: any;

  userDetails: any;
  // @ViewChild('loginRef', { static: true })
  // loginElement: any = ElementRef;
  constructor(
    private socialAuthService: SocialAuthService,
    private userLoginService: UserLoginService,
    private router: Router,

    private metaService: Meta,
    @Inject(DOCUMENT)
    private doc: Document,
    private renderer: Renderer2,
    ngZone: NgZone
  ) {
    // window['onSignIn'] = (user: any) =>
    //   ngZone.run(() => {
    //     console.log('hai');
    //     this.afterSignUp(user);
    //   });
  }

  // afterSignUp(googleUser: any) {
  //   this.gUser = googleUser;
  //   this.onSignIn(this.gUser);
  //   console.log(this.gUser);
  // }
  // public onSignIn(googleUser: any): void {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail());
  // }

  // public signOut():void {
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }
  ngOnInit(): void {
    // this.googleAuthSDK();
    this.metaService.addTags([
      {
        name: 'google-signin-client_id',
        content:
          '15922768334-rse4413kf08qv6gustdusfoj2s2fomos.apps.googleusercontent.com',
      },
    ]);
    let script = this.renderer.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.defer = true;
    script.async = true;
    this.renderer.appendChild(document.body, script);
  }
  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public addUser(f: any) {
    this.User = {
      email: f.emails,
      userName: f.fullname,
      password: f.password,
    };

    console.log(this.User);
    this.userLoginService.addUserLoginDetails(this.User).subscribe(
      (data) => {
        this.userDetails = data;
        localStorage.setItem('token', this.userDetails.id);
        this.status = 1;
        this.message = 'Sign Up successful. Login using below link';
        console.log('POST SUCCESS');
        // if(data == ("User Already Exist")){

        // }
        console.log(data);
      },
      (err) => {
        this.message = 'User Already Exist. Try another user';
      }
    );
  }
  // callLoginButton() {
  //   this.auth2.attachClickHandler(
  //     this.loginElement.nativeElement,
  //     {},
  //     (googleAuthUser: any) => {
  //       let profile = googleAuthUser.getBasicProfile();
  //       console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
  //       console.log('ID: ' + profile.getId());
  //       console.log('Name: ' + profile.getName());
  //       console.log('Image URL: ' + profile.getImageUrl());
  //       console.log('Email: ' + profile.getEmail());

  //       /* Write Your Code Here */
  //     },
  //     (error: any) => {
  //       alert(JSON.stringify(error, undefined, 2));
  //     }
  //   );
  // }
  // googleAuthSDK() {
  //   window['googleSDKLoaded'] = () => {
  //     window['gapi'].load('auth2', () => {
  //       this.auth2 = window['gapi'].auth2.init({
  //         client_id: 'YOUR CLIENT ID HERE',
  //         cookiepolicy: 'single_host_origin',
  //         scope: 'profile email',
  //       });
  //       this.callLoginButton();
  //     });
  //   };
  //   (function (d, s, id) {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {
  //       return;
  //     }
  //     js = d.createElement(s);
  //     js.id = id;
  //     console.log(js);
  //     // js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
  //     // fjs.parentNode.insertBefore(js, fjs);
  //   })(document, 'script', 'google-jssdk');
  // }
}
