import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../model/category.model';
import { UserLoginService } from '../service/userLogin.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  categoryForm!: FormGroup;
  categoryModel: any = Category;
  arr: any = [];
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private userLoginService: UserLoginService,
    private router: Router
  ) {
    this.categoryForm = this.formBuilder.group({
      category: ['', [Validators.required]],
    });
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
    this.arr = [];
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.userLoginService.getCategories().subscribe((res: any) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        //this.data={title:res.data[i].name,date:res.data[i].date}
        // Pushing object to array
        console.log(res[i]);
        this.arr.push(res[i]);
      }
      console.log(this.arr, this.arr[1]);
    });
  }
  get addTaskFormControls() {
    return this.categoryForm.controls;
  }
  onAddCategory() {
    console.log(this.categoryForm);
    this.categoryModel = {
      categoryName: this.categoryForm.controls['category'].value,
    };
    this.userLoginService
      .addCategoryDetails(this.categoryModel)
      .subscribe((data) => {
        this.arr = data;
        console.log(data);
      });
  }
  onClick(ctgry: any) {
    console.log(ctgry);
    this.userLoginService.deleteCategory(ctgry).subscribe((res: any) => {
      this.arr = res;
      console.log('DELETED');
    });
  }
}
