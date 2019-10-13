import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetails } from '../../Models/UserRegistration';
import { DataService } from '../../Services/DataService';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {
  userDetails: UserDetails = {} as UserDetails;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.CurrentUserDetails.subscribe(res => this.userDetails = res);
  }
  EditUserDetails() {
    this.router.navigate(['../UserRegistration'], { relativeTo: this.route });
  }
  SubmitUserDetails() {
    this.router.navigate(['../ConfirmationDetails'], { relativeTo: this.route });
  }
}
