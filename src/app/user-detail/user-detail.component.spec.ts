import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, NgForm, NgModel} from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { UserDetailComponent } from './user-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../user.service';

import {of} from 'rxjs';


const sinon = require('sinon');



const form  = <NgForm>  {
  value: {

    name: 'test',
    surname: 'test',
    mail: 'someEmail@mail.com',
    phone: 1133132,
    birthDate: new Date().toDateString(),
    addDate: new Date().toDateString(),
    editDate: new Date().toDateString()
  }
};

const mockUser = {

  name: 'test',
  surname: 'test',
  mail: 'someEmail@mail.com',
  phone: 1133132,
  birthDate: new Date().toDateString(),
  addDate: new Date().toDateString(),
  editDate: new Date().toDateString()
};


const mockFunctionUpdateUser = {
  updateUser(args) { return of( true ); },
  getUsers() { return of( true ); }
};


describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let userService: UserService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: UserService, useValue: mockFunctionUpdateUser},
        { provide: NgForm, useValue: form }],
      imports: [FormsModule, HttpClientModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));
  it('should be Truthy when submitted', async(() => {
    expect(component. onSubmit());
    expect(component. submitted).toBeTruthy();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.get(UserService);

  });


  it('should check function save() to be called', async(() => {
    const mockUpdateUser = sinon.spy(userService, 'updateUser');

    expect(component.save(form));
    expect(component.user).toEqual(mockUser);
    expect(mockUpdateUser.called).toEqual(true);


  }));

});


