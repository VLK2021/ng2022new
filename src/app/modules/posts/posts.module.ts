import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts-components/posts/posts.component';
import { PostDetailsComponent } from './posts-components/post-details/post-details.component';
import {PostDataService} from "./post-service/post-data.service";
import { PostComponent } from './posts-components/post/post.component';
import {PostGuard} from "./post-service/guards/post.guard";
import {PostsResolver} from "./post-service/resolvers/posts.resolver";
import {PostResolver} from "./post-service/resolvers/post.resolver";


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
    PostsResolver,
    PostResolver,
    PostGuard
  ]
})
export class PostsModule { }
