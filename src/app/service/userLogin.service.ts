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
  id: any;
  getdata: any = {
    id: 1,
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

  public addTaskDetails(userTaskDetails: Task): Observable<Task> {
    const url = `http://localhost:8092/todo/login/task`;
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
    this.id = this.getdata.id;
    const url = `http://localhost:8092/todo/login/getCategory?id=${this.id}`;
    console.log('url', url);

    return this.http.get(url);
  }

  public deleteCategory(category: String) {
    this.id = this.getdata.id;
    const url = `http://localhost:8092/todo/login/Category?id=${this.id}&ctgry=${category}`;
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
    return this.http.post<Profile>(url, profileDetails);
  }
}
