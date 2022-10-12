import { Component, OnInit } from '@angular/core';
import {IComment} from "../../../../interfaces/IComment";
import {CommentDataService} from "../../comment-service/comment-data.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[]

  constructor(private commentDataService: CommentDataService) { }

  ngOnInit(): void {
    this.commentDataService.getComments().subscribe(value => this.comments = value)
  }

}
