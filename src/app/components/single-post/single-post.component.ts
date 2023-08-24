import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../interfaces/IPostInterface";


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})


export class SinglePostComponent implements OnInit {
  singlePost: IPost;

  constructor(private activatedRouter: ActivatedRoute,
              private router: Router) {
    this.activatedRouter.params.subscribe(value => {
      this.singlePost = this.router.getCurrentNavigation()?.extras?.state?.['data']
    })
  }

  ngOnInit(): void {
  }

}
