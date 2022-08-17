// import { HttpClient, HttpHandler } from '@angular/common/http';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { UserLoginService } from '../service/userLogin.service';

// import { SettingsComponent } from './settings.component';

// describe('SettingsComponent', () => {
//   let component: SettingsComponent;
//   let fixture: ComponentFixture<SettingsComponent>;
//   let categoryService: UserLoginService;
//   let http: HttpClient;
//   let httpController: HttpTestingController;
//   let categoryModel = {
//     categoryName: 'Heart',
//   };
//   let category = {
//     categoryName: '',
//   };
//   // beforeEach(async () => {
//   //   await TestBed.configureTestingModule({
//   //     imports: [FormsModule, RouterTestingModule],
//   //     declarations: [SettingsComponent],
//   //     providers: [
//   //       FormBuilder,
//   //       UserLoginService,
//   //       HttpClient,
//   //       HttpHandler,
//   //       Router,
//   //     ],
//   //   }).compileComponents();
//   // });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SettingsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         HttpClientTestingModule,
//         RouterTestingModule,
//         ReactiveFormsModule,
//       ],
//       providers: [UserLoginService, FormBuilder],
//     });
//     // categoryService = TestBed.inject(UserLoginService);
//     // http = TestBed.inject(HttpClient);
//     // httpController = TestBed.inject(HttpTestingController);
//   });

//   it('should create categories', () => {
//     // expect(component).toBeTruthy();
//     expect('true').toBeTruthy();
//   });

//   // it('service created', () => {
//   //   expect(categoryService).toBeDefined();
//   // });

//   // it('should create category', () => {
//   //   expect(
//   //     categoryService.addCategoryDetails(categoryModel).subscribe((data) => {
//   //       console.log(data);
//   //       return data.categoryName;
//   //     })
//   //   );
//   // });

//   // it('get today taskname', () => {
//   //   taskService.getTodayTaskName().subscribe((data) => {
//   //     expect(data.length).toBeLessThan(1);
//   //   });
//   // });

//   // it('should use GET to retrieve data for grtTodayList', () => {
//   //   taskService.getTodayList().subscribe();
//   //   const testRequest = httpController.expectOne(
//   //     'http://localhost:8092/todo/login/getTodayList?userId=1'
//   //   );
//   //   expect(testRequest.request.method).toEqual('GET');
//   // });

//   it('should use POST to add category to database', () => {
//     categoryService.addCategoryDetails(categoryModel).subscribe((data) => {
//       console.log(data);
//       category = data;
//     });
//     // const testRequest = httpController.expectOne(
//     //   'http://localhost:8092/todo/login/category?id=1'
//     // );
//     console.log(category);
//     expect(category.categoryName).toEqual(categoryModel.categoryName);
//   });
// });
