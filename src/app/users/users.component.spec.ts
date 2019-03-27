import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { UsersComponent } from './users.component';
import {of} from 'rxjs';

import {UserService} from '../user.service';

const sinon = require('sinon');

const mockUserService = {
  deleteUser() { return of( true ); },
  updateUser() { return of( true ); },
  getUsers() { return of( users); }
};

const mockUser = {
  id: 1,
  name: 'john',
  surname: 'smith',
  phone: 3800000000,
  mail: 'mail@mail.com',
  birthDate: new Date().toDateString(),
  addDate: new Date().toDateString(),
  editDate: new Date().toDateString()
};




const users = [{
  _id: '1',
  _source: {
    name: 'john',
    surname: 'smith',
    phone: 3800000000,
    mail: 'mail@mail.com',
    birthDate: new Date().toDateString(),
    addDate: new Date().toDateString(),
    editDate: new Date().toDateString()}
},
  {
    _id: 2,
    _source: {
      name: 'john',
      surname: 'smith',
      phone: 3800000000,
      mail: 'mail@mail.com',
      birthDate: new Date().toDateString(),
      addDate: new Date().toDateString(),
      editDate: new Date().toDateString()
    }
  }
];


describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: UserService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
     schemas: [ NO_ERRORS_SCHEMA],
      providers: [ UsersComponent,
        {provide: UserService, useValue: mockUserService}],
      imports: [ FormsModule, HttpClientModule,  HttpClientTestingModule]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.get(UserService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
  it('should check that user selected', () => {

    expect(component.onSelect(mockUser));
    expect(component.selectedUser).toBeTruthy();
  });

  it('should check that user deleted and function deleteUser() called', () => {
    const mockDeleteUser = sinon.spy(userService, 'deleteUser');

    expect(component.delete(mockUser));
    expect(mockDeleteUser.called).toEqual(true);
  });
  it('should check that function getUsers() called',() => {
    const mockGetUser = sinon.spy(userService, 'getUsers');

    expect(userService.getUsers());

    expect(mockGetUser.called).toEqual(true);
    // expect(mockGetUser.users.length).toEqual(2);
  });

});
