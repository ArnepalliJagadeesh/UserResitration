import { UserDetails } from '../Models/UserRegistration';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class MockInfo {
    MockUserInfo: UserDetails = {
        UserName: 'Vani12',
        Password: 'Tankala@123',
        FirstName: 'Vani',
        LastName: 'Tankala',
        Email: 'vanitankala@gmail.com',
        Gender: false,
        MobileNo: '7680963399',
        Address: 'Kukatpally',
        ConfirmPassword: 'Tankala@123',
        Seq1: 'What is the first name of your favourite uncle?',
        SeqAns1: 'SatyaNarayana',
        Seq2: `Where did you meet your spouse?`,
        SeqAns2: 'Vijayawada',
        Seq3: `What is your eldest cousin's name?`,
        SeqAns3: 'Pooja'
    };

    SecurityQuestions: string[] = ['What is the first name of your favourite uncle?',
        'Where did you meet your spouse?',
        `What is your eldest cousin's name?`,
        `What is your youngest child's nickname?`,
        `What is your eldest child's nickname?`];
}
