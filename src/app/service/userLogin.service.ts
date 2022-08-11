import { Injectable } from '@angular/core';
import { userLogin } from '../model/userLogin.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';
import { Category } from '../model/category.model';
import { Profile } from '../model/profile.model';

@Injectable()
export class UserLoginService {
  constructor(private http: HttpClient) {}
  id: any = localStorage.getItem['token'];

  getdata: any = {
    id: localStorage.getItem('token'),
    userName: '',
    password: '',
    email: '',
    phone: null,
    mobile: null,
    address: null,
    category: [
      {
        categoryName: 'Eye',
        tasks: [
          {
            id: 9,
            categoryName: 'Eye',
            taskName: 'Operation',
            time: '17:20:00',
            date: '2022-07-29T00:00:00.000+00:00',
          },
        ],
        categoryId: 6,
      },
      {
        categoryName: 'Heart',
        tasks: [
          {
            id: 11,
            categoryName: 'Heart',
            taskName: 'string',
            time: '03:50:00',
            date: '2022-07-29T00:00:00.000+00:00',
          },
          {
            id: 16,
            categoryName: 'Heart',
            taskName: 'string',
            time: '03:50:00',
            date: '2022-07-30T00:00:00.000+00:00',
          },
        ],
        categoryId: 7,
      },
      {
        categoryName: 'Liver',
        tasks: [],
        categoryId: 17,
      },
    ],
  };
  public addUserLoginDetails(
    userLoginDetails: userLogin
  ): Observable<userLogin> {
    const url = `http://localhost:8092/todo/login/signup`;
    console.log('url', url);

    return this.http.post<userLogin>(url, userLoginDetails);
  }

  public checkLoginDetails(userLoginDetails: userLogin) {
    // const url = `http://localhost:8092/todo/login/signin?userName=userLoginDetails.userName&password=userLoginDetails.password`;
    // const url = `http://localhost:8092/todo/login/signin?userName=${userLoginDetails.userName}&password=${userLoginDetails.password}`;
    const url = `http://localhost:8092/todo/login/signin?email=${userLoginDetails.email}&password=${userLoginDetails.password}`;
    console.log('url', url);
    console.log(
      this.http.get(url).subscribe((data) => {
        console.log(data);
        this.getdata = data;
      })
    );
    this.id = this.getdata.id;
    return this.http.get(url);
  }

  public addTaskDetails(
    userTaskDetails: Task,
    categoryid: any
  ): Observable<Task> {
    this.id = this.getdata.id;
    const url = `http://localhost:8092/todo/login/task?userId=${this.id}&categoryId=${categoryid}`;
    console.log('url', url);

    return this.http.post<Task>(url, userTaskDetails);
  }

  public addCategoryDetails(
    userCategoryDetails: Category
  ): Observable<Category> {
    this.id = this.getdata.id;
    const url = `http://localhost:8092/todo/login/category?id=${this.id}`;
    console.log('url', url);

    return this.http.post<Category>(url, userCategoryDetails);
  }

  public getCategories() {
    console.log(localStorage.getItem('token'));
    this.id = localStorage.getItem('token');
    const url = `http://localhost:8092/todo/login/getCategory?id=${this.id}`;
    console.log('url', url);

    return this.http.get(url);
  }

  public getCategoryID(ctgry: any) {
    this.id = localStorage.getItem('token');

    const url = `http://localhost:8092/todo/login/CategoryId?id=${this.id}&ctgry=${ctgry}`;
    console.log('url', url);

    return this.http.get(url);
  }
  categoryId: any;
  public getCategoryIDs(userTaskDetails: Task, ctgry: any) {
    this.id = localStorage.getItem('token');

    const url = `http://localhost:8092/todo/login/CategoryId?id=${this.id}&ctgry=${ctgry}`;
    console.log('url', url);

    this.http.get(url).subscribe((res) => {
      this.categoryId = res;
    });
    return this.addTaskDetails(userTaskDetails, this.categoryId);
  }

  public deleteCategory(categoryId: any) {
    this.id = this.getdata.id;
    const url = `http://localhost:8092/todo/login/Category?categoryId=${categoryId}`;
    return this.http.delete(url);
  }

  public updateProfile(profileDetails: Profile): Observable<Profile> {
    this.id = this.getdata.id;
    const url = `http://localhost:8092/todo/login/profile?userId=${this.id}`;
    console.log('url', url);

    return this.http.post<Profile>(url, profileDetails);
  }

  public getProfile() {
    this.id = this.getdata.id;
    const url = `http://localhost:8092/todo/login/getProfile?userId=${this.id}`;
    console.log('url', url);
    return this.http.get(url);
  }

  public editProfile(profileDetails: Profile): Observable<Profile> {
    this.id = this.getdata.id;
    const url = `http://localhost:8092/todo/login/editprofile?userId=${this.id}`;
    console.log('url', url);
    return this.http.put<Profile>(url, profileDetails);
  }

  getTodayTaskName(): Observable<String[]> {
    this.id = this.getdata.id;
    const url2 = `http://localhost:8092/todo/login/getTodayTaskName?userId=${this.id}`;
    return this.http.get<String[]>(`${url2}`);
  }

  getTodayList(): Observable<Task[]> {
    this.id = this.getdata.id;
    const url2 = `http://localhost:8092/todo/login/getTodayList?userId=${this.id}`;
    return this.http.get<Task[]>(`${url2}`);
  }

  IsLoggedIn() {
    return localStorage.getItem('token') != '';
  }
}
