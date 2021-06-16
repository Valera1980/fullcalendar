import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fullcalendar';
  resources = [{
    id:'1',
    title: 'wrwrrwer'
  }];
  calendarOptions: CalendarOptions = {
    timeZone: 'UTC',
    initialView: 'resourceTimeGridDay',
    resources: [
      { id: 'a', title: 'Room A' },
      { id: 'b', title: 'Room B'},
      { id: 'c', title: 'Room C' },
      { id: 'd', title: 'Room D' }
    ],
  };
}
