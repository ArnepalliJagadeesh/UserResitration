import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationComponent } from './user-registration.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockInfo } from '../../MockData/mockData';
import { DataService } from '../../Services/DataService';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;
  let mock: MockInfo;
  let dataSerive: DataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserRegistrationComponent],
      imports: [FormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    mock = new MockInfo();
    dataSerive = new DataService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('User Registraction Save Click', () => {
    component.userDetails = mock.MockUserInfo;
    component.SaveUserDetails();
    expect(component.userDetails.UserName).toBe('Vani12');
  });
  it('User Registraction Save Click', () => {
    component.userDetails = mock.MockUserInfo;
    component.SaveUserDetails();
    component.ngOnInit();
    expect(component.userDetails.Seq1).toBeDefined();
  });
});
