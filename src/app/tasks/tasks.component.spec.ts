// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { UserLoginService } from '../service/userLogin.service';

// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';

// import { TasksComponent } from './tasks.component';
// let httpController: HttpTestingController;
// describe('TasksComponent', () => {
//   let component: TasksComponent;
//   let fixture: ComponentFixture<TasksComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [TasksComponent],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TasksComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     var hello = 'hai';
//     expect('hai').toBe(hello);

//     // service.getData().subscribe();

//     const testRequest = httpController.expectOne('http://localhost:/data');

//     expect(testRequest.request.method).toEqual('GET');
//   });
// });
// // describe('TasksComponent', () => {
// //   it('should create', () => {
// //     expect('true').toBeTruthy();
// //   });
// // });
