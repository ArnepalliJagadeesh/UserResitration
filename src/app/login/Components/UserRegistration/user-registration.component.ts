import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../Models/UserRegistration';
import { DataService } from '../../Services/DataService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }
  userDetails: UserDetails = {} as UserDetails;
  ngOnInit() {
    this.dataService.CurrentUserDetails.subscribe(res => this.userDetails = res);
    if (!this.userDetails.Seq1) {
      this.userDetails.Seq1 = '';
      this.userDetails.Seq2 = '';
      this.userDetails.Seq3 = '';
    }
    this.userDetails.Gender = true;
  }
  SaveUserDetails() {
    this.dataService.UpdateUserDetails(this.userDetails);
    this.router.navigate(['../ReviewDetails'], { relativeTo: this.route });
  }
}
