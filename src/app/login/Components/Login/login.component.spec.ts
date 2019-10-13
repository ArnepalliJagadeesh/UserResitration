import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockInfo } from '../../MockData/mockData';
import { DataService } from '../../Services/DataService';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mock: MockInfo;
  let dataSerive: DataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    mock = new MockInfo();
    dataSerive = new DataService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('UserLogin click test 1', () => {
    component.UserLogin();
    expect(component.ErrorMessage).toBe('Please Enter User Name');
  });
  it('UserLogin click test 2', () => {
    component.UserName = 'Vani12';
    component.UserLogin();
    expect(component.ErrorMessage).toBe('Please Enter Password');
  });
  it('UserLogin click test 3', () => {
    component.UserName = 'Vani12';
    component.Password = 'Vani12';
    component.UserLogin();
    expect(component.ErrorMessage).toBe('Invalid Credentials - Please Enter Valid Credentials');
  });
  it('UserLogin click test 3', () => {
    component.UserName = 'Vani12';
    component.Password = 'Tankala@123';
    component.userDetails = mock.MockUserInfo;
    component.UserLogin();
    expect(component.ErrorMessage).toBe('');
  });
  it('ForgotPassword click test 1', () => {
    expect(component.isShowForgotPassword).toBe(false);
    component.forgotPass();
    expect(component.isShowForgotPassword).toBe(true);
  });
  it('changePass click test 1', () => {
    component.changePass();
  });

  it('ValdateSecurity click test 1', () => {
    component.SeqAns1 = 'test';
    component.ValdateSecurity();
    expect(component.ErrorMessage).toBe('Please Enter validate Security Answers 1');
  });
  it('ValdateSecurity click test 2', () => {
    component.userDetails = mock.MockUserInfo;
    component.SeqAns1 = 'SatyaNarayana';
    component.ValdateSecurity();
    expect(component.ErrorMessage).toBe('Please Enter validate Security Answers 2');
  });
  it('ValdateSecurity click test 3', () => {
    component.userDetails =  mock.MockUserInfo;
    component.SeqAns1 = 'SatyaNarayana';
    component.SeqAns2 = 'Vijayawada';
    component.ValdateSecurity();
    expect(component.ErrorMessage).toBe('Please Enter validate Security Answers 3');
  });
  it('ValdateSecurity click test 4', () => {
    component.userDetails = mock.MockUserInfo;
    component.SeqAns1 = 'SatyaNarayana';
    component.SeqAns2 = 'Vijayawada';
    component.SeqAns3 = 'Pooja';
    component.ValdateSecurity();
    expect(component.ErrorMessage).toBe('');
  });
  it('Update UserDetails Object', () => {
    component.userDetails = mock.MockUserInfo;
    component.UpdateCurrentUserObject();
    component.ngOnInit();
    expect(component.userDetails.UserName).toBeDefined();
  });
});
