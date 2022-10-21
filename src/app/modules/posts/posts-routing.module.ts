import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostDetailsComponent} from "./posts-components/post-details/post-details.component";
import {PostGuard} from "./post-service/guards/post.guard";


const routes: Routes = [
  {path:'', component: PostsComponent,
    canActivate:[PostGuard],
    canDeactivate:[PostGuard],
  children:[
    {path:':id', component:PostDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsRoutingModule { }