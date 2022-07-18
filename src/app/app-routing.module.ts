import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'home',component:ProfileComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'tasks',component:TasksComponent},
  {path:'settings',component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
