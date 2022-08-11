import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';




import { TodolistService } from '../service/todolist.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private http:HttpClient, private todoservice:TodolistService) { }
  Events:any=[];

  calendarOptions:CalendarOptions={
   headerToolbar: {
     left: 'prev,next today',
     center: 'title',
     right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
   },
   initialView:'dayGridMonth',
   dateClick: this.handleDateClick.bind(this),
   weekends: true,
   
  }
  
  
  
  data1:any=[
    {
      id: 2,
      category: "heart",
      taskName: "do checkup",
      time: "12:00:00",
      date: "2022-06-11T18:30:00.000+00:00"
    }
  ]
  
  ngOnInit() {
   
    
       
       
      
      //console.log(this.data1.taskName);
      // this.rowData=dataArray;
      // console.log(this.rowData);
      // console.log(data);
      // for(let i=0;i<this.data1.length;i++){
      //   console.log(this.data1[i].taskName);
      //   this.items.push({
      //     title:this.data1[i].taskName,
      //     start:startOfDay(this.data1[i].date),
      //     color: {primary: '#e3bc08', secondary: '#FDF1BA'},
      //     meta: {
      //       time: this.data1[i].date
      //     }
      //   });
      //   this.events=this.items;
      // }
      // this.http.get('http://localhost:8092/todo/login/getCalendarList').subscribe((res:any)=>{
      // console.log(res);  
     
      //   this.Events=res;
      //   for(let i=0;i<res.length;i++){
      //     console.log(res[i]);
          
      //   }
        
      //   //this.Events=res;
      //   console.log("under event");
      //   console.log(this.Events);
      //   this.calendarOptions.eventSources=[
      //     {
      //       url:"http://localhost:8092/todo/login/getCalendarList",
            
      //       method:'GET',
      //       color:'red',
      //       textColor:'black'

      //     }
      //   ]
      //   this.calendarOptions.displayEventTime=false;
        
              
      // });

      this.todoservice.getCalenderList().subscribe(data=>{
        //this.Events=data;
        var events=[];
        this.data1=data;
        console.log(this.data1);
        var resources=[];
        for(var i=0;i<this.data1.length;i++){
          var event={
            title:this.data1[i].taskName,
            start:this.data1[i].date,
            end:this.data1[i].date
          }
          events.push(event);
        }
        this.calendarOptions.events=events;
      });
      
      this.calendarOptions.displayEventTime=false;
    }


      
    
    handleDateClick(arg: { dateStr: string; }){
      alert('date click!'+arg.dateStr+"  ")
    }
    

}
