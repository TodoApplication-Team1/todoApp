import { Injectable } from '@angular/core';
import { userLogin } from '../model/userLogin.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';
import { Category } from '../model/category.model';

@Injectable()
export class UserLoginService {
  constructor(private http: HttpClient) {}

  public addUserLoginDetails(
    userLoginDetails: userLogin
  ): Observable<userLogin> {
    const url = `http://localhost:8092/todo/login/signup`;
    console.log('url', url);

    return this.http.post<userLogin>(url, userLoginDetails);
  }

  public checkLoginDetails(userLoginDetails: userLogin) {
    // const url = `http://localhost:8092/todo/login/signin?userName=userLoginDetails.userName&password=userLoginDetails.password`;
    const url = `http://localhost:8092/todo/login/signin?userName=${userLoginDetails.userName}&password=${userLoginDetails.password}`;
    console.log('url', url);

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
    const url = `http://localhost:8092/todo/login/category`;
    console.log('url', url);

    return this.http.post<Category>(url, userCategoryDetails);
  }

  public getCategories() {
    const url = `http://localhost:8092/todo/login/getCategory`;
    console.log('url', url);

    return this.http.get(url);
  }

  public deleteCategory(category: String) {
    const url = `http://localhost:8092/todo/login/Category?ctgry=${category}`;
    return this.http.delete(url);
  }
}
