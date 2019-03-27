import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import {HttpEvent} from "@angular/common/http";
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {



  selectedUser: User;

  users: object[];



  constructor(private userService: UserService) { }

  ngOnInit() {

    this.getUsers();



  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  delete(user: User): void {
  this.users = this.users.filter(h => h !== user);
  this.userService.deleteUser(user).subscribe();
}



getUsers(): void {

    this.userService.getUsers()
        .subscribe((users: any) => {

          const allusers = [];

          for (let i = 0; i < users.length; i++){
            allusers.push({
              id: users[i]._id,
              name: users[i]._source.name,
              surname: users[i]._source.surname,
              phone: users[i]._source.phone,
              mail: users[i]._source.mail,
              birthDate: users[i]._source.birthDate,
              addDate: users[i]._source.addDate,
              editDate: users[i]._source.editDate
            })}
          this.users = allusers;

          console.log(allusers);
        })}


}
