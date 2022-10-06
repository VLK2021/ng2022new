import { Component, OnInit } from '@angular/core';
import {IPostDetails} from "../../interfaces";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetailsObj: IPostDetails

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPost(id).subscribe(value => this.postDetailsObj = value);
    })
  }

}
