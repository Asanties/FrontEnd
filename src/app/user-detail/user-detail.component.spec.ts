import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { UserDetailComponent } from './user-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../user.service';
import {MockUserService} from '../users.service.mock';
import {of} from 'rxjs';

const sinon = require('sinon');

const form = {
  value: {
    name: 'Andrew',
    surname: 'Anderson',
    mail: 'someEmail2@mail.com',
    phone: '0987654321',
    birthDate: new Date(),
    addDate: new Date().toDateString(),
    editDAte: new Date().toDateString()
  }
} as NgForm;

const updateUser = {
  id: '19IRVGkBL_4_2jfQ9F7R',
  name: 'Andrew',
  surname: 'Anderson',
  mail: 'someEmail2@mail.com',
  phone: '0987654321',
  dateOfBirth: new Date().toDateString(),
  dateOfAdded: new Date().toDateString(),
  dateOfChanged: new Date().toDateString()
};
const User = null;



describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: UserService, useValue: MockUserService}],
      imports: [FormsModule, HttpClientModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.get(UserService);

  });

  it('should be Truthy when submitted', () => {
    expect(component. onSubmit());
    expect(component. submitted).toBeTruthy();
  });

  it('should be Truthy when submitted', () => {
    spyOn(component.user, 'save');
    component.save();
    expect(component.save()).toHaveBeenCalled();
  });
});


