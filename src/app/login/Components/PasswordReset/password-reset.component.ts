import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/DataService';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetails } from '../../Models/UserRegistration';
import { MockInfo } from '../../MockData/mockData';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  userDetails: UserDetails = {} as UserDetails;
  Password = '';
  UserName = '';
  ConfirmPassword = '';
  ErrorMessage = '';
  isPasswordChanged = false;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private mock: MockInfo) { }

  ngOnInit() {
    this.dataService.CurrentUserDetails.subscribe(res => this.userDetails = res);
    if (!this.userDetails.UserName) {
      this.userDetails = this.mock.MockUserInfo;
    }
  }
  ChangeUserPassword() {
    if (this.UserName !== this.userDetails.UserName) {
      this.ErrorMessage = 'User Name Does Not Exists';
      return;
    }
    this.userDetails.Password = this.Password;
    this.userDetails.ConfirmPassword = this.Password;
    this.dataService.UpdateUserDetails(this.userDetails);
    this.isPasswordChanged = true;
  }
}
