import { Component, OnInit, Input  } from '@angular/core';


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
  @Input() user: any;
  editDate: string;
  onSubmit() { this.submitted = true; }

   save(): any {
     this.user.editDate =  new Date().toDateString();
     this.userService.updateUser(this.user).subscribe();

   }


  ngOnInit() {}

}
