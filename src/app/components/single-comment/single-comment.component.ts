import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ISingleCommentInterface} from "../../interfaces/ISingleCommentInterface";
import {CommentService} from "../../services/comment.service";


@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})


export class SingleCommentComponent implements OnInit {
  singleComment: ISingleCommentInterface;

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentService.getComment(id).subscribe(value => this.singleComment = value);
    })
  }

}
