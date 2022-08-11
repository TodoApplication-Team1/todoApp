import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

import { UserLoginService } from '../service/userLogin.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  public taskForm: FormGroup;
  taskModel: any;
  arr: any = [];
  message = '';
  status = 0;
  constructor(
    private formBuilder: FormBuilder,
    private userLoginService: UserLoginService,
    private http: HttpClient
  ) {
    this.taskForm = this.formBuilder.group({
      category: new FormControl('', [Validators.required]),
      task: ['', [Validators.required]],
      time1: ['', [Validators.required]],
      date1: ['', [Validators.required]],
    });
  }
  categoryId: any;
  onSelect(c: any) {
    this.userLoginService.getCategoryID(c).subscribe((res) => {
      this.categoryId = res;
      console.log(res);
    });
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
    return this.taskForm.controls;
  }
  model: any;
  id: any;
  public getCategoryID(ctgry: any) {
    this.id = localStorage.getItem('token');

    const url = `http://localhost:8092/todo/login/CategoryId?id=${this.id}&ctgry=${ctgry}`;
    console.log('url', url);

    return this.http.get(url).toPromise();
  }
  tasks: any;
  async onAddTaskDetails() {
    console.log(this.taskForm);
    this.taskModel = {
      categoryName: this.taskForm.controls['category'].value,
      taskName: this.taskForm.controls['task'].value,
      time: this.taskForm.controls['time1'].value,
      date: this.taskForm.controls['date1'].value,
    };
    console.log(this.taskModel);
    const users = await this.getCategoryID(this.taskModel.categoryName);
    console.log(users);
    this.id = localStorage.getItem('token');
    console.log(
      `http://localhost:8092/todo/login/task?userId=${this.id}&categoryId=${users}`
    );
    this.http
      .post<Task>(
        `http://localhost:8092/todo/login/task?userId=${this.id}&categoryId=${users}`,
        this.taskModel
      )
      .subscribe((data) => {
        console.log(data);
        this.status = 1;
        this.message = 'Task Added';
      });
    // this.userLoginService.addTaskDetails(this.taskModel, users);
    // .subscribe((data) => {
    //   // this.taskModel = data;
    //   this.status = 1;
    //   this.message = 'Task Added';
    //   console.log(data);
    // });
  }
}
