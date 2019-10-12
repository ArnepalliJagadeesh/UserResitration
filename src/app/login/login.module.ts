import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { UserRegistrationComponent } from './Components/UserRegistration/user-registration.component';
import { ReviewDetailsComponent } from './Components/ReviewDetails/review-details.component';
import { ConfirmationDetailsComponent } from './Components/ConfirmationDetails/confirmation-details.component';
import { LoginComponent } from './Components/Login/login.component';
import { PasswordResetComponent } from './Components/PasswordReset/password-reset.component';
import { ChangePasswordComponent } from './Components/ChangePassword/change-password.component';
import {EqualValidator} from './Directives/EqualValidator';
import {DataService } from './Services/DataService';

@NgModule({
  declarations: [UserRegistrationComponent, ReviewDetailsComponent, ConfirmationDetailsComponent,
    LoginComponent, PasswordResetComponent, ChangePasswordComponent, EqualValidator],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
