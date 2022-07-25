import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(
    private formBuilder: FormBuilder,
    private userLoginService: UserLoginService
  ) {
    this.taskForm = this.formBuilder.group({
      category: ['', [Validators.required]],
      task: ['', [Validators.required]],
      time1: ['', [Validators.required]],
      date1: ['', [Validators.required]],
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

  onAddTaskDetails(): void {
    console.log(this.taskForm);
    this.taskModel = {
      category: this.taskForm.controls['category'].value,
      taskName: this.taskForm.controls['task'].value,
      time: this.taskForm.controls['time1'].value,
      date: this.taskForm.controls['date1'].value,
    };
    this.userLoginService.addTaskDetails(this.taskModel).subscribe((data) => {
      this.taskModel = data;
      console.log(data);
    });
  }
}
