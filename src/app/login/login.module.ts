import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { UserRegistrationComponent } from './UserRegistration/user-registration.component';
import { ReviewDetailsComponent } from './ReviewDetails/review-details.component';
import { ConfirmationDetailsComponent } from './ConfirmationDetails/confirmation-details.component';
import { LoginComponent } from './Login/login.component';
import { PasswordResetComponent } from './PasswordReset/password-reset.component';
import { ChangePasswordComponent } from './ChangePassword/change-password.component';


@NgModule({
  declarations: [UserRegistrationComponent, ReviewDetailsComponent, ConfirmationDetailsComponent,
    LoginComponent, PasswordResetComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
