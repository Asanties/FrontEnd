import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserCreateComponent } from './user-create.component';
import {FormsModule, NgForm, FormBuilder} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersComponent } from '../users/users.component';
import {User} from "../user";
import {UserService} from '../user.service';
import {MockUserService} from "../users.service.mock";


import {of} from 'rxjs';



const form  = <NgForm>  {
  value: {
    name: 'john',
    surname: 'Smith',
    mail: 'someEmail@mail.com',
    phone: 1133132,
    birthDate: new Date().toDateString(),
    addDate: new Date().toDateString(),
    editDate: new Date().toDateString()
  }
};

const mockUser = {
  name: 'john',
  surname: 'Smith',
  mail: 'someEmail@mail.com',
  phone: 1133132,
  birthDate: new Date().toDateString(),
  addDate: new Date().toDateString(),
  editDate: new Date().toDateString()
};
form.resetForm = () => true;


describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreateComponent],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ UsersComponent,
        { provide: UserService, useValue: MockUserService },
        { provide: NgForm, useValue: form },
      ],
      imports: [ FormsModule, HttpClientModule,  HttpClientTestingModule],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check function  UserCreate()', () => {



    expect(component.createUser(form));
    expect(component.user).toEqual(mockUser);



  });
  // it('calls the original function',  () => {
  //   const callback = sinon.fake();
  //   const proxy = component.createUser(callback);
  //
  //   proxy();
  //
  //   assert(callback.called);
  // });


});
