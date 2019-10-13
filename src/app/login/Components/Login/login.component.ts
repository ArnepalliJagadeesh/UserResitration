import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/DataService';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetails } from '../../Models/UserRegistration';
import { MockInfo } from '../../MockData/mockData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName = '';
  Password = '';
  SeqAns3 = '';
  SeqAns2 = '';
  SeqAns1 = '';
  ErrorMessage = '';
  isShowForgotPassword = false;
  userDetails: UserDetails = {} as UserDetails;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private mock: MockInfo) { }

  ngOnInit() {
    this.dataService.CurrentUserDetails.subscribe(res => this.userDetails = res);
    if (!this.userDetails.UserName) {
      this.userDetails = this.mock.MockUserInfo;
    }
  }
  UserLogin() {
    this.ErrorMessage = '';
    if (this.UserName === '') {
      this.ErrorMessage = 'Please Enter User Name';
      return;
    }
    if (this.Password === '') {
      this.ErrorMessage = 'Please Enter Password';
      return;
    }
    if (this.UserName !== this.userDetails.UserName || this.Password !== this.userDetails.Password) {
      this.ErrorMessage = 'Invalid Credentials - Please Enter Valid Credentials';
      return;
    }
    if (this.ErrorMessage === '') {
      this.router.navigate(['../Home'], { relativeTo: this.route });
    }
  }
  forgotPass() {
    this.isShowForgotPassword = true;
  }
  changePass() {
    this.router.navigate(['../ChangePassword'], { relativeTo: this.route });
  }
  ValdateSecurity() {
    this.ErrorMessage = '';
    if (this.SeqAns1 !== this.userDetails.SeqAns1) {
      this.ErrorMessage = 'Please Enter validate Security Answers 1';
      return;
    }
    if (this.SeqAns2 !== this.userDetails.SeqAns2) {
      this.ErrorMessage = 'Please Enter validate Security Answers 2';
      return;
    }
    if (this.SeqAns3 !== this.userDetails.SeqAns3) {
      this.ErrorMessage = 'Please Enter validate Security Answers 3';
      return;
    }

    this.router.navigate(['../PasswordReset'], { relativeTo: this.route });
  }
}
