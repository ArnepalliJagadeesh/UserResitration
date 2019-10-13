import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './Components/UserRegistration/user-registration.component';
import { ReviewDetailsComponent } from './Components/ReviewDetails/review-details.component';
import { ConfirmationDetailsComponent } from './Components/ConfirmationDetails/confirmation-details.component';
import { LoginComponent } from './Components/Login/login.component';
import { PasswordResetComponent } from './Components/PasswordReset/password-reset.component';
import { ChangePasswordComponent } from './Components/ChangePassword/change-password.component';
import { HomeComponent } from './Components/Home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'UserRegistration', pathMatch: 'full'},
  { path: 'UserRegistration', component: UserRegistrationComponent },
  { path: 'ReviewDetails', component: ReviewDetailsComponent },
  { path: 'ConfirmationDetails', component: ConfirmationDetailsComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'PasswordReset', component: PasswordResetComponent },
  { path: 'ChangePassword', component: ChangePasswordComponent },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
