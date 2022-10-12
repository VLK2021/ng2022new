import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPostDetails} from "../../../../interfaces/IPostDetails";
import {PostDataService} from "../../post-service/post-data.service";


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {
  postDetailsObj: IPostDetails

  constructor(private postDataService: PostDataService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postDataService.getPost(id).subscribe(value => this.postDetailsObj = <IPostDetails>value);
    })
  }

}
