import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../Models/UserRegistration';
import { DataService } from '../../Services/DataService';
import { Router, ActivatedRoute } from '@angular/router';
import { MockInfo } from '../../MockData/mockData';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private mock: MockInfo) { }
  userDetails: UserDetails = {} as UserDetails;
  SecurityQuestions = this.mock.SecurityQuestions;
    ngOnInit() {
  this.dataService.CurrentUserDetails.subscribe(res => this.userDetails = res);
  if (!this.userDetails.Seq1) {
    this.userDetails.Seq1 = '';
    this.userDetails.Seq2 = '';
    this.userDetails.Seq3 = '';
  }
  this.userDetails.Gender = true;
  this.SecurityQuestions = this.mock.SecurityQuestions;
}
SaveUserDetails() {
  this.dataService.UpdateUserDetails(this.userDetails);
  this.router.navigate(['../ReviewDetails'], { relativeTo: this.route });
}
}
