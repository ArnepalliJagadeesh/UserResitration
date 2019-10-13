import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDetailsComponent } from './confirmation-details.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConfirmationDetailsComponent', () => {
  let component: ConfirmationDetailsComponent;
  let fixture: ComponentFixture<ConfirmationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationDetailsComponent ],
      imports: [FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
