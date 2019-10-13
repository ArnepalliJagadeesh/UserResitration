import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/DataService';
import { UserDetails } from '../../Models/UserRegistration';
import { Router, ActivatedRoute } from '@angular/router';
import { MockInfo } from '../../MockData/mockData';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  userDetails: UserDetails = {} as UserDetails;
  oldPassword = '';
  NewPassword = '';
  UserName = '';
  ConfirmPassword = '';
  ErrorMessage = '';
  isPasswordChanged = false;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private mock: MockInfo) { }

  ngOnInit() {
    this.dataService.CurrentUserDetails.subscribe(res => this.userDetails = res);
    console.log(this.userDetails.UserName);
    if (!this.userDetails.UserName) {
      this.userDetails = this.mock.MockUserInfo;
    }
  }
  ChangeUserPassword() {
    this.ErrorMessage = '';
    if (this.oldPassword !== this.userDetails.Password || this.UserName !== this.userDetails.UserName) {
      this.ErrorMessage = 'Invalid Credentials - Please Enter Valid Credentials';
      return;
    }
    this.userDetails.Password = this.NewPassword;
    this.userDetails.ConfirmPassword = this.NewPassword;
    this.dataService.UpdateUserDetails(this.userDetails);
    this.isPasswordChanged = true;
  }

}
