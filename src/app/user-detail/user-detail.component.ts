import { Component, OnInit, Input  } from '@angular/core';
import { User } from '../user';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgForm} from '@angular/forms';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `]

})
export class UserDetailComponent implements OnInit {
  submitted = false;

  onSubmit() { this.submitted = true; }


  @Input() user: User;

  constructor( private userService: UserService
   ) {}

   save(): void {
     this.user.editDate =  new Date().toDateString();
   this.userService.updateUser(this.user).subscribe();

   }


  ngOnInit() {};


}
