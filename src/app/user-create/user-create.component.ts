import {Component, OnInit, Input, Output} from '@angular/core';
import { User } from '../user';

import { UserService } from '../user.service';
import { UsersComponent } from '../users/users.component';
import {NgForm} from '@angular/forms';




@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']


})
export class UserCreateComponent implements OnInit {
  user: object;
  maxdate: any;

 constructor(  private userService: UserService, private usersComponent: UsersComponent,
  ) {
    this.maxdate = new Date().toISOString().substr(0, 10);

  }


  ngOnInit() { }


createUser(form: NgForm) {


    this.user = {
      name: form.value.name,
      surname: form.value.surname,
      phone: form.value.phone,
      mail: form.value.mail,
      birthDate: form.value.birthDate,
      addDate: new Date().toDateString(),
      editDate: new Date().toDateString()
    };


    this.userService.createUser( this.user )
    .subscribe((user: any) => { this.usersComponent.getUsers();
        });

    form.resetForm();
  }

}


