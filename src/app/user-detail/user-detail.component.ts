import { Component, OnInit, Input  } from '@angular/core';
import { User } from '../user';

import { UserService } from '../user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],

})
export class UserDetailComponent implements OnInit {
  submitted = false;

  onSubmit() { this.submitted = true; }

maxdate: any;
  @Input() user: any;

  constructor( private userService: UserService
   ) {
     this.maxdate = new Date().toISOString().substr(0, 10);
   }

   save(): any {
     this.user.editDate =  new Date().toDateString();
     this.userService.updateUser(this.user).subscribe();

   }


  ngOnInit() {};


}
