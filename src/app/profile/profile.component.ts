import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../service/userLogin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  ProfileForm!: FormGroup;
  profileModel: any;
  constructor(
    private userLoginService: UserLoginService,
    private formBuilder: FormBuilder
  ) {
    this.ProfileForm = this.formBuilder.group({
      emails: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  // updateProfile
  get addProfileFormControls() {
    return this.ProfileForm.controls;
  }
  onAddProfile() {
    this.profileModel = {
      email: this.ProfileForm.controls['emails'].value,
      phone: this.ProfileForm.controls['phone'].value,
      mobile: this.ProfileForm.controls['mobile'].value,
      address: this.ProfileForm.controls['address'].value,
    };
    this.userLoginService.updateProfile(this.profileModel).subscribe((data) => {
      console.log(data);
    });
  }
}
