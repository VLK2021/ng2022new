import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments-components/comments/comments.component';
import { CommentComponent } from './comments-components/comment/comment.component';
import { CommentDetailsComponent } from './comments-components/comment-details/comment-details.component';
import {CommentDataService} from "./comment-service/comment-data.service";
import {CommentGuard} from "./comment-service/guards/comment.guard";
import {CommentsResolver} from "./comment-service/resolvers/comments.resolver";
import {CommentResolver} from "./comment-service/resolvers/comment.resolver";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers:[
    CommentDataService,
    CommentsResolver,
    CommentResolver,
    CommentGuard,
  ]
})
export class CommentsModule { }
