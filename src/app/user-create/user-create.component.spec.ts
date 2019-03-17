import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserCreateComponent } from './user-create.component';
import {FormsModule, NgForm} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersComponent } from '../users/users.component';
import {UserService} from '../user.service';



import {of} from 'rxjs';


const mockfunctionCreateUser = {
  createUser() { return of( true ); },
  getUsers() { return of( true ); }
};
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
form.resetForm = () => true;


describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreateComponent],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ UsersComponent,
        { provide: UserService, useValue: mockfunctionCreateUser },
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

});
