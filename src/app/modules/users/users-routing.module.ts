import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./users-components/users/users.component";
import {UserDetailsComponent} from "./users-components/user-details/user-details.component";
import {UserGuard} from "./user-services/guards/user.guard";
import {UsersResolver} from "./user-services/resolvers/users.resolver";
import {UserResolver} from "./user-services/resolvers/user.resolver";


const routes: Routes = [
  {path:'', component: UsersComponent,
    resolve:{usersData:UsersResolver},
    canActivate:[UserGuard],
    canDeactivate:[UserGuard],
    children:[
      {path:':id', component: UserDetailsComponent,
      resolve:{userData:UserResolver}
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
