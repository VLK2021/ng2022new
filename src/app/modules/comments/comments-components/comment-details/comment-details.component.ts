import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentDataService} from "../../comment-service/comment-data.service";
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

  constructor(private activatedRoute: ActivatedRoute,
              private commentDataService: CommentDataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentDataService.getComment(id).subscribe(value => this.commentDetailsObj = <IcommentDetails>value);
    })
  }

}
