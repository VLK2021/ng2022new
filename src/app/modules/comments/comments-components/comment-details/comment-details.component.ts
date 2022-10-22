import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IcommentDetails} from "../../../../interfaces/IcommentDetails";


interface ConstructorParams {
  private: ActivatedRoute;
}

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})

export class CommentDetailsComponent implements OnInit {
  commentDetailsObj: IcommentDetails

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentData}) => this.commentDetailsObj = commentData);
  }
}
