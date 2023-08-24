import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../../interfaces/ICommentInterface";
import {CommentService} from "../../services/comment.service";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})


export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
   this.commentService.getAllComments().subscribe(value => this.comments = value);
  }

}
