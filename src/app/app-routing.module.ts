import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./app-components/home/home.component";


let routes:Routes = [
  {path: '', component: HomeComponent},
  {path:'users', loadChildren:() => import('./modules/users/users.module').then(m =>m.UsersModule)},
  {path:'posts', loadChildren:() => import('./modules/posts/posts.module').then(m => m.PostsModule)}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule {
}