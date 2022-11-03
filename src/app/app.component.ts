import { Component } from '@angular/core';

import {IUser} from "./interfaces/IUser";
import {DataService} from "./services/data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user:IUser;

  constructor(private dataService:DataService) {
    dataService.storage.subscribe(value => {
      this.user = value
    })
  }

}
