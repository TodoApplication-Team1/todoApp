// // import { ComponentFixture, TestBed } from '@angular/core/testing';

// // import { HomeComponent } from './home.component';

// // describe('HomeComponent', () => {
// //   let component: HomeComponent;
// //   let fixture: ComponentFixture<HomeComponent>;

// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       declarations: [ HomeComponent ]
// //     })
// //     .compileComponents();
// //   });

// //   beforeEach(() => {
// //     fixture = TestBed.createComponent(HomeComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// /
// import { HomeComponent } from './home.component';
// import { TodolistService } from '../service/todolist.service';
// import { HttpClient } from '@angular/common/http';
// import { Task } from '../model/task.model';

// describe('HomeComponent', () => {
//   let taskService: TodolistService;
//   let http: HttpClient;
//   let httpController: HttpTestingController;
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   // beforeEach(async () => {
//   //   await TestBed.configureTestingModule({
//   //     declarations: [ HomeComponent ]
//   //   })
//   //   .compileComponents();
//   // });

//   // beforeEach(() => {
//   //   fixture = TestBed.createComponent(HomeComponent);
//   //   component = fixture.componentInstance;
//   //   fixture.detectChanges();
//   // });

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, RouterTestingModule],
//       providers: [TodolistService],
//     });
//     taskService = TestBed.inject(TodolistService);
//     http = TestBed.inject(HttpClient);
//     httpController = TestBed.inject(HttpTestingController);
//   });

//   it('should create', () => {
//     expect('true').toBeTruthy();
//   });

//   it('service created', () => {
//     expect(taskService).toBeDefined();
//   });

//   it('today list api', () => {
//     expect(
//       taskService.getTodayList().subscribe((data) => {
//         console.log(data);
//         return data.length;
//       })
//     ).toBeLessThan(1);
//   });

//   it('get today taskname', () => {
//     taskService.getTodayTaskName().subscribe((data) => {
//       expect(data.length).toBeLessThan(1);
//     });
//   });

//   it('should use GET to retrieve data for grtTodayList', () => {
//     taskService.getTodayList().subscribe();
//     const testRequest = httpController.expectOne(
//       'http://localhost:8092/todo/login/getTodayList?userId=1'
//     );
//     expect(testRequest.request.method).toEqual('GET');
//   });

//   it('should use GET to retrieve data for getTaskName', () => {
//     taskService.getTodayTaskName().subscribe();
//     const testRequest = httpController.expectOne(
//       'http://localhost:8092/todo/login/getTodayTaskName?userId=1'
//     );
//     expect(testRequest.request.method).toEqual('GET');
//   });
// });
