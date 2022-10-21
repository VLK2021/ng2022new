import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./users-components/users/users.component";
import {UserDetailsComponent} from "./users-components/user-details/user-details.component";
import {UserGuard} from "./user-services/guards/user.guard";


const routes: Routes = [
  {path:'', component: UsersComponent,
    canActivate:[UserGuard],
    canDeactivate:[UserGuard],
    children:[
      {path:':id', component: UserDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
