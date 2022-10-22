import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentDetailsComponent} from "./comments-components/comment-details/comment-details.component";
import {CommentGuard} from "./comment-service/guards/comment.guard";
import {CommentsResolver} from "./comment-service/resolvers/comments.resolver";
import {CommentResolver} from "./comment-service/resolvers/comment.resolver";

const routes: Routes = [
  {path:'', component: CommentsComponent,
    resolve:{commentsData: CommentsResolver},
    canActivate:[CommentGuard],
    canDeactivate:[CommentGuard],
  children:[
    {path:':id', component: CommentDetailsComponent,
      resolve:{commentData:CommentResolver}}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CommentsRoutingModule { }
