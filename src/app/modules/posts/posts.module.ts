import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts-components/posts/posts.component';
import { PostDetailsComponent } from './posts-components/post-details/post-details.component';
import {PostDataService} from "./post-service/post-data.service";
import { PostComponent } from './posts-components/post/post.component';
import {PostGuard} from "./post-service/guards/post.guard";


@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostDataService,
    PostGuard
  ]
})
export class PostsModule { }
