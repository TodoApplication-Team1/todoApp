import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http:HttpClient) { }

  url1:string="http://localhost:8092/todo/login/getTodayList"
   getTodayList():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.url1}`)

 }

 url2:string="http://localhost:8092/todo/login/getTodayTaskName"
   getTodayTaskName():Observable<String[]>{
      return this.http.get<String[]>(`${this.url2}`)
   }

  
}
