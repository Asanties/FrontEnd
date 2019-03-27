import { Component, OnInit, Input  } from '@angular/core';

import {FormGroup, NgForm} from "@angular/forms";
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],

})
export class UserDetailComponent implements OnInit {

  constructor( private userService: UserService
   ) {
     this.maxdate = new Date().toISOString().substr(0, 10);
   }

  submitted = false;

maxdate: any;
  @Input() users: any;
user: any;

  editDate: string;
  onSubmit() { this.submitted = true; }



   save(form: NgForm): any{
     this.user = {
       name: form.value.name,
       surname: form.value.surname,
       phone: form.value.phone,
       mail: form.value.mail,
       birthDate: form.value.birthDate,
      addDate: form.value.addDate,
       editDate: new Date().toDateString()
     };


      this.userService.updateUser(this.users).subscribe();

   }


  ngOnInit() {}

}
