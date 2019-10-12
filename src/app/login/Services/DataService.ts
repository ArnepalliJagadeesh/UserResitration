import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDetails } from '../Models/UserRegistration';
@Injectable({ providedIn: 'root' })
export class DataService {
    private UserDetails = new BehaviorSubject({} as UserDetails);
    CurrentUserDetails = this.UserDetails.asObservable();

    UpdateUserDetails(userData: UserDetails) {
        this.UserDetails.next(userData);
    }
}
