import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Navigation, Router} from "@angular/router";

import {IUserDetails} from "../../interfaces/IUserDetails";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  userDetailsObj: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe(value => {
      //@ts-ignore
      // console.log(this.router.getCurrentNavigation()?.extras.state['data']);
      this.userDetailsObj = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IUserDetails;
    });
  }

  ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(value =>{
  //     let {state:{data}} = history;
  //     this.userDetailsObj = data as IUserDetails;
  //
  //   })
  }

}
