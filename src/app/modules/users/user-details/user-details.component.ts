import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUserDetails} from "../../../interfaces/IUserDetails";
import {UserDataService} from "../user-services/user-data.service";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  userDetailsObj: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute,
              private UserDataService: UserDataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.UserDataService.getUser(id).subscribe(value => this.userDetailsObj = <IUserDetails>value);
    })
  }

}
