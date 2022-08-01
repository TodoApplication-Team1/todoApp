import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseClassNames } from '@fullcalendar/angular';
import { IGetRowsParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { TodolistService } from '../service/todolist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //tasks=['Go to shop','check the washing machine','Water plant','Wash the car','dinner'];
  inprogress: any[] = [];
  done: any[] = [];
  tasks: any = [];
  newTask: any = [{ id: 0, category: '', taskName: '', time: '', date: '' }];

  rowData: any = [];

  constructor(
    private router: Router,
    private todoservice: TodolistService,
    private http: HttpClient
  ) {}

  columnDefs = [
    { headerName: 'Task', field: 'taskName' },
    { headerName: 'Category', field: 'category' },
    { headerName: 'Time', field: 'time' },
    // {headerName: 'Date', field: 'date'}
  ];

  ngOnInit(): void {
    this.todoservice.getTodayList().subscribe((data) => {
      console.log(data);
      console.log('printed');
      var dataArray = Object.values(data);
      this.rowData = dataArray;
      console.log(this.rowData);
    });

    this.todoservice.getTodayTaskName().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.tasks.push(data[i]);
      }
    });
  }

  // rowData = [
  //   { task: 'Go to shop', time: '11:00 am' },
  //   { task: 'check the washing machine', time: '1:00 pm' },
  //   { task: 'Water plant',  time: '5:30 pm' },
  //   { task: 'Wash the car',  time: '3:00 pm' },
  //   { task: 'dinner',  time: '8:00 pm' },
  // ];
  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
