import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions:CalendarOptions={
    initialView:'dayGridMonth',
    dateClick:this.handleDateClick.bind(this),
    events:[
      {title:'go to shopping',date:'2022-07-19'},
      {title:'Water plants',date:'2022-07-20'}
    ]
  };
  handleDateClick(arg: { dateStr: string; }){
    alert('date click!'+arg.dateStr)
  }
}
