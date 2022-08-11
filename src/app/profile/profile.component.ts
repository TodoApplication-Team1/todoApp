import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../service/userLogin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  ProfileForm!: FormGroup;
  profileModel: any;
  is_edit = 'false';
  status = 0;
  message = '';
  profiles: any = {
    id: 0,
    userName: 'Divya Peter',
    password: '$2a$10$sfb9hIK4TbJjt97Qhod.fuB72ZzAxe4C75uIvJBQrGBmhCKT9KdSO',
    email: 'divya@gmail.com',
    phone: '8376868786',
    mobile: '7376868786',
    address: 'TKM, Kerala',
    category: [
      {
        categoryName: 'Heart',
        tasks: [],
        categoryId: 20,
      },
    ],
  };
  constructor(
    private userLoginService: UserLoginService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.ProfileForm = this.formBuilder.group({
      phone: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.userLoginService.getProfile().subscribe((data) => {
      this.profiles = data;
    });
  }
  // updateProfile
  get addProfileFormControls() {
    return this.ProfileForm.controls;
  }
  onAddProfile() {
    this.profileModel = {
      phone: this.ProfileForm.controls['phone'].value,
      mobile: this.ProfileForm.controls['mobile'].value,
      address: this.ProfileForm.controls['address'].value,
    };
    this.userLoginService.editProfile(this.profileModel).subscribe((data) => {
      console.log(data);
      this.profiles = data;
      this.status = 1;
      this.message = 'Profile has been updated';
    });

    // this.userLoginService.editProfile(this.profileModel).subscribe((data) => {
    //   console.log(data);
    // });
  }

  onEdit() {
    this.is_edit = 'true';
    this.status = 0;
    this.message = '';
  }
  logout() {
    localStorage.setItem('token', '');
    this.route.navigate(['login']);
  }

  fileName = '';
  profileURL = null;
  removePencil: boolean = true;
  uploadProfile(file: any) {
    // this.uploadService.pushFileToStorage(file).subscribe(
    //   (res: any) => {
    //     if (res instanceof HttpResponse) {
    //       console.log("Uploaded PRofile:", res.body);
    //       this.profileURL = res.body.fileDownloadUri;
    //       this.removePencil = false;
    //     }
    //   },
    //   (err) => {
    //     console.log("error");
    //   }
    // );
  }
  selectProfilePic(event: any) {
    console.log(event);
    if (event.target.files) {
      this.fileName = event.target.files[0].name;
      let profileFile = event.target.files[0];

      this.uploadProfile(profileFile);

      event.target.value = null;
    }
  }
}
