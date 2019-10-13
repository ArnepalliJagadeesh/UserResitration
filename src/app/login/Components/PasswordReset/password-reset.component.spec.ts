import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetComponent } from './password-reset.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockInfo } from '../../MockData/mockData';
import { DataService } from '../../Services/DataService';

describe('PasswordResetComponent', () => {
  let component: PasswordResetComponent;
  let fixture: ComponentFixture<PasswordResetComponent>;
  let mock: MockInfo;
  let dataSerive: DataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordResetComponent],
      imports: [FormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetComponent);
    component = fixture.componentInstance;
    mock = new MockInfo();
    dataSerive = new DataService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Password Reset Change Password 1 ', () => {
    component.ChangeUserPassword();
    expect(component.ErrorMessage).toBe('User Name Does Not Exists');
  });
  it('should Change User Password Test 2 ', () => {
    component.userDetails = mock.MockUserInfo;
    component.UserName = 'Vani12';
    component.ChangeUserPassword();
    expect(component.ErrorMessage).toBe('');
    component.ngOnInit();
    expect(component.userDetails.UserName).toBeDefined();
  });
});
