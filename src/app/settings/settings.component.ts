import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { _ } from 'ag-grid-community';
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
  msg: any;
  status = 0;
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
  ctgry1: any;
  id: any;
  openVerticallyCentered1(content1: any, ctgry: any) {
    this.modalService.open(content1, { centered: true });
    // this.arr = [];
    this.userLoginService.getCategoryID(ctgry).subscribe((res) => {
      this.id = res;
    });
    this.ctgry1 = ctgry;
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
    this.userLoginService.addCategoryDetails(this.categoryModel).subscribe(
      (data) => {
        this.status = 1;
        this.msg = 'Category Added';
        this.arr = data;
        console.log(data);
      },
      (err) => {
        this.status = 0;
        this.msg = 'Category Already Exist';
      }
    );
  }
  onClick() {
    console.log(this.ctgry1);

    this.userLoginService.deleteCategory(this.id).subscribe((res: any) => {
      this.msg = 'Category Deleted';
      // this.arr = res;

      console.log('DELETED');
    });
    this.msg = 'Category Deleted';
    // this.arr.delete(this.ctgry1);
    // this.ngOnInit();
    const index = this.arr.indexOf(this.ctgry1, 0);
    if (index > -1) {
      this.arr.splice(index, 1);
    }
  }
}
