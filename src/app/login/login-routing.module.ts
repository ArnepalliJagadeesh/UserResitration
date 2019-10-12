import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './UserRegistration/user-registration.component';
import { ReviewDetailsComponent } from './ReviewDetails/review-details.component';
import { ConfirmationDetailsComponent } from './ConfirmationDetails/confirmation-details.component';
import { LoginComponent } from './Login/login.component';
import { PasswordResetComponent } from './PasswordReset/password-reset.component';
import { ChangePasswordComponent } from './ChangePassword/change-password.component';


const routes: Routes = [
  { path: '', component: UserRegistrationComponent },
  { path: 'UserRegistration', component: UserRegistrationComponent },
  { path: 'ReviewDetails', component: ReviewDetailsComponent },
  { path: 'ConfirmationDetails', component: ConfirmationDetailsComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'PasswordReset', component: PasswordResetComponent },
  { path: 'ChangePassword', component: ChangePasswordComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
