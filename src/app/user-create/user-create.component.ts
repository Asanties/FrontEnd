import {Component, OnInit, Input, Output} from '@angular/core';
import { User } from '../user';

import { UserService } from '../user.service';
import { UsersComponent } from '../users/users.component';
import {NgForm} from "@angular/forms";




@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']


})
export class UserCreateComponent implements OnInit {
  user: User;
  name: string;
  surname: string;
  phone: number;
  mail: string;
  birthDate: any;
  addDate: string;
  editDate: string;

  maxdate: any;
  selectedUser: User;


  ngOnInit() {
  }




 constructor( private userService: UserService, private usersComponent: UsersComponent
  ) {
    this.maxdate = new Date().toISOString().substr(0, 10);

  }


createUser( ) {



    this.user = {
      id: 1,
      name: this.name,
      surname: this.surname,
      phone: this.phone,
      mail: this.mail,
      birthDate: this.birthDate,
      addDate: new Date().toDateString(),
      editDate: new Date().toDateString()
    }


    this.userService.createUser(this.user)
    .subscribe(() => { this.usersComponent.getUsers();
        });


  }



}
