import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostDetailsComponent} from "./posts-components/post-details/post-details.component";
import {PostGuard} from "./post-service/guards/post.guard";
import {PostsResolver} from "./post-service/resolvers/posts.resolver";
import {PostResolver} from "./post-service/resolvers/post.resolver";


const routes: Routes = [
  {path:'', component: PostsComponent,
    resolve:{postsData: PostsResolver},
    canActivate:[PostGuard],
    canDeactivate:[PostGuard],
  children:[
    {path:':id', component:PostDetailsComponent,
      resolve:{postData:PostResolver}
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsRoutingModule { }
