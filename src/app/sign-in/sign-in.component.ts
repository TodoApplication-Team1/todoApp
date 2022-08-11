import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import {
  SocialAuthService,
  FacebookLoginProvider,
  SocialUser,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { Router } from '@angular/router';
import { UserLoginService } from '../service/userLogin.service';
import { userLogin } from '../model/userLogin.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  getData: any;
  user: any;
  value: any = { id: 0, userName: '', email: '', password: '' };
  error: any;
  status = 0;
  constructor(
    private userLoginService: UserLoginService,
    private socialAuthService: SocialAuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private metaService: Meta,
    @Inject(DOCUMENT)
    private doc: Document,
    private renderer: Renderer2
  ) {
    this.signInForm = this.formBuilder.group({
      emails: ['', [Validators.required]],
      passwords: ['', [Validators.required]],
    });
  }
  ngOnInit() {
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
  get addSignInFormControls() {
    return this.signInForm.controls;
  }
  userExist(): void {
    console.log(this.signInForm);
    this.user = {
      email: this.signInForm.controls['emails'].value,
      password: this.signInForm.controls['passwords'].value,
    };

    this.userLoginService.checkLoginDetails(this.user).subscribe((res) => {
      // if (res === "OK") {
      this.value = res;
      localStorage.setItem('token', this.value.id);
      if (this.value.email == this.user.email) {
        this.router.navigate(['home']);
      } else {
        this.status = 1;
        this.error = 'Check email and password is correct or not';
      }
      console.log(this.value);

      //
      // }
      // for (let i = 0; i < res.length; i++) {
      //   //this.data={title:res.data[i].name,date:res.data[i].date}
      //   // Pushing object to array
      //   console.log(res[i]);
      //   this.arr.push(res[i]);
      // }
      // console.log(this.arr, this.arr[1]);
    });
    // this.userLoginService.checkLoginDetails(this.User).subscribe(
    //   (data: any) => {
    //     console.log("GET SUCCESS");
    //     if (data == "OK") {
    //       alert("Login Success!!");

    //       this.router.navigate(["home"]);
    //     } else {
    //       alert("user not found!!");
    //     }
    //   },
    //   (err) => {
    //     alert("Something went wrong!!");
    //   }
    // );
  }

  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
