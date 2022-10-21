import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUserDetails} from "../../../../interfaces/IUserDetails";
import {UserDataService} from "../../user-services/user-data.service";
import {IUser} from "../../../../interfaces/IUser";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  userDetailsObj: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this.UserDataService.getUser(id).subscribe(value => this.userDetailsObj = <IUserDetails>value);
    // })
    this.activatedRoute.data.subscribe(({userData}) => console.log(userData));
  }

}
