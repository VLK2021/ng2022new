import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../interfaces/IPostInterface";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {
  @Input()
  post: IPost

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
  }


  navigateMe(post: IPost) {
    this.router.navigate([post.id], {relativeTo: this.activatedRouter, state: {data: post}})
  }
}
