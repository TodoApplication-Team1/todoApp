import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,firstValueFrom } from 'rxjs';

import { first, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  constructor(private http: HttpClient) {}

  

  url1:string="http://localhost:8092/todo/login/getTodayList"
   getTodayList():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.url1}`)

 }

 url2:string="http://localhost:8092/todo/login/getTodayTaskName"
   getTodayTaskName():Observable<String[]>{
      return this.http.get<String[]>(`${this.url2}`)
   }

   url3:string="http://localhost:8092/todo/login/getCalendarList" 
   getCalenderList():Observable<Task[]>{
     return this.http.get<Task[]>(`${this.url3}`)
   }

  
}
