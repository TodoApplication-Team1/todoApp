import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { TodolistService } from './todolist.service';

describe('TodolistService', () => {
  let todoservice: TodolistService;
  let http: HttpClient;
  beforeEach(function () {
    todoservice = new TodolistService(http);
  });

  it('should return Calendardata', () => {
    let response: any = [
      {
        id: 2,
        category: 'heart',
        taskName: 'do checkup',
        time: '12:00:00',
        date: '2022-06-11T18:30:00.000+00:00',
      },
    ];
    let value: any;

    spyOn(todoservice, 'getCalenderList').and.returnValue(of(response));
    todoservice.getCalenderList().subscribe((res) => {
      value = res;
      console.log(res);
    });
    expect(value.length).toBeGreaterThan(0);
  });

  it('should be created', () => {
    expect(todoservice).toBeTruthy();
  });

  it('should return getTodayList', () => {
    let response: any = [
      {
        id: 2,
        category: 'heart',
        taskName: 'do checkup',
        time: '12:00:00',
        date: '2022-06-11T18:30:00.000+00:00',
      },
    ];
    let value: any;

    spyOn(todoservice, 'getTodayList').and.returnValue(of(response));
    todoservice.getTodayList().subscribe((res) => {
      value = res;
    });
    expect(value.length).toBeLessThan(2);
  });

  it('should return getTodayTaskName', () => {
    let response: any = [
      {
        id: 2,
        category: 'heart',
        taskName: 'do checkup',
        time: '12:00:00',
        date: '2022-06-11T18:30:00.000+00:00',
      },
    ];
    let value: any;

    spyOn(todoservice, 'getTodayTaskName').and.returnValue(of(response));
    todoservice.getTodayTaskName().subscribe((res) => {
      value = res;
    });
    expect(value.length).toBeLessThan(2);
  });
});
