import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users-components/users/users.component';
import {UserDataService} from "./user-services/user-data.service";
import { UserComponent } from './users-components/user/user.component';
import { UserDetailsComponent } from './users-components/user-details/user-details.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers:[
    UserDataService
  ]
})
export class UsersModule { }
