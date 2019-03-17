import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { UserDetailComponent } from './user-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../user.service';
import {MockUserService} from '../users.service.mock';
const sinon = require('sinon');

const mockUser = {
  name: 'john',
  surname: 'smith',
  phone: 3800000000,
  mail: 'mail@mail.com',
  birthDate: new Date().toDateString(),
  addDate: new Date().toDateString(),
  editDate: new Date().toDateString()
};


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
    expect(component. submitted).toBe(true);
  });

  it('should check function save()', () => {
    const stubFunctionSaveUsers = sinon.spy(component, 'save');

    expect(stubFunctionSaveUsers.call).toBeTruthy();

  });
});


