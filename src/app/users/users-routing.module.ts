import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {UsersComponent} from "./users-components/users/users.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UsersResolver} from "./user-services/resolvers/users.resolver";
import {UserResolver} from "./user-services/resolvers/user.resolver";
import {UserGuard} from "./user-services/guards/user.guard";


const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersData:UsersResolver},
    canDeactivate:[UserGuard],
    canActivate:[UserGuard],
    children: [
      {path: ':id', component: UserDetailsComponent, resolve: {userData: UserResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
