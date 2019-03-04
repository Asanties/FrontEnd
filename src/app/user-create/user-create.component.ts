import { Component, OnInit, Input  } from '@angular/core';
import { User } from '../user';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgForm} from '@angular/forms';
import { UserService } from '../user.service';
import { UsersComponent } from '../users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  styles: [`.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}

.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}
    `]
})
export class UserCreateComponent implements OnInit {

  ngOnInit() {
  }
  selectedUser: User;

users: User[];


  constructor( private userService: UserService,
  private userComponent: UsersComponent) {}
   @Input() user: User;

  id: number;
  name: string;
  surname: string;
  age: number;
  mail: string;
  birthDate: number;
  addDate: string;
  editDate: string;

  createUser(UserForm: NgForm){



    this.user = {
      id: 1,
      name: this.name,
      surname: this.surname,
      age: this.age,
      mail: this.mail,
      birthDate: this.birthDate,
      addDate: new Date().toDateString(),
      editDate: new Date().toDateString()
    }


    this.userService.createUser(this.user)
    .subscribe(() => { this.userComponent.getUsers();
        });


  }



}
