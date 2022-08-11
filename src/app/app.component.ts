import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  router: Router;
  isSideNavCollapsed = false;
  screenWidth = 0;
  constructor(private _router: Router) {
    this.router = _router;
  }
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
   title = 'todo';
  // isSideNavCollapsed=false;
  // screenWidth=0;
  // onToggleSideNav(data:SideNavToggle):void{
  //   this.screenWidth=data.screenWidth;
  //   this.isSideNavCollapsed=data.collapsed;
  // }
}
