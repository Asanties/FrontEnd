import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  selectedUser: User;

  users: User[];



  constructor(private userService: UserService) { }


  onSelect(user: User): void {
    this.selectedUser = user;
  }

  delete(user: User): void {
  this.users = this.users.filter(h => h !== user);
  this.userService.deleteUser(user).subscribe();
}



getUsers(): void {

    this.userService.getUsers()
        .subscribe((users) => {

          var allusers = [];

          for(var i = 0; i < users.length; i++){
            allusers.push({
              id: users[i]._id,
              name: users[i]._source.name,
              surname: users[i]._source.surname,
              age: users[i]._source.age,
              mail: users[i]._source.mail,
              birthDate: users[i]._source.birthDate,
              addDate: users[i]._source.addDate,
              editDate: users[i]._source.editDate
            })
          }
          this.users = allusers;

          console.log(allusers);
        })
}
ngOnInit() {

  this.getUsers();



}

}
