import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {SingleUserComponent} from './components/single-user/single-user.component';
import {SingleCommentComponent} from './components/single-comment/single-comment.component';
import {SinglePostComponent} from './components/single-post/single-post.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    SingleUserComponent,
    SingleCommentComponent,
    SinglePostComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},

      {path: 'home', component: HomeComponent},
      {
        path: 'users', component: UsersComponent,
        children: [
          {path: ':id', component: SingleUserComponent}
        ]
      },

      {
        path: 'posts', component: PostsComponent,
        children: [
          {path: ':id', component: SinglePostComponent}
        ]
      },

      {
        path: 'comments', component: CommentsComponent,
        children: [
          {path: ':id', component: SingleCommentComponent}
        ]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
