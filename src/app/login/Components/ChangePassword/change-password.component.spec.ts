import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockInfo } from '../../MockData/mockData';
import { DataService } from '../../Services/DataService';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;
  let mock: MockInfo;
  let dataSerive: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePasswordComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [MockInfo]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    mock = new MockInfo();
    dataSerive = new DataService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Change User Password Test 1 ', () => {
    component.ChangeUserPassword();
    expect(component.ErrorMessage).toBe('Invalid Credentials - Please Enter Valid Credentials');
  });
  it('should Change User Password Test 2 ', () => {
    component.userDetails = mock.MockUserInfo;
    component.oldPassword = 'Tankala@123';
    component.ChangeUserPassword();
    expect(component.ErrorMessage).toBe('Invalid Credentials - Please Enter Valid Credentials');
  });
  it('should Change User Password Test 3', () => {
    component.userDetails = mock.MockUserInfo;
    component.oldPassword = 'Tankala@123';
    component.UserName = 'Vani12';
    component.ChangeUserPassword();
    expect(component.ErrorMessage).toBe('');
    component.ngOnInit();
    expect(component.userDetails.UserName).toBeDefined();
  });
});
