import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  tasks=['Go to shop','check the washing machine','Water plant','Wash the car','dinner'];
  inprogress:any[]=[];
  done:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  columnDefs = [
    {headerName: 'Task', field: 'task' },
    {headerName: 'Time', field: 'time'}
];

rowData = [
  { task: 'Go to shop', time: '11:00 am' },
  { task: 'check the washing machine', time: '1:00 pm' },
  { task: 'Water plant',  time: '5:30 pm' },
  { task: 'Wash the car',  time: '3:00 pm' },
  { task: 'dinner',  time: '8:00 pm' },
];
deleteTask(i:number){
  this.tasks.splice(i,1)
}
drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
}


}
