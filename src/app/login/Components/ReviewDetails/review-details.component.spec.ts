import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDetailsComponent } from './review-details.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReviewDetailsComponent', () => {
  let component: ReviewDetailsComponent;
  let fixture: ComponentFixture<ReviewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewDetailsComponent],
      imports: [FormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Edit User Details Click', () => {
    component.EditUserDetails();
  });
  it('Submit User Details  Click', () => {
    component.SubmitUserDetails();
  });
});
