import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register-component',
  templateUrl: 'app/register/register.component.html'
})
export class RegisterComponent implements OnInit {
     
     user:User;
     constructor(
         // private router: Router,
         private teamService: TeamService,
         private router: Router) {

     }
        
     ngOnInit(){
       this.user = new User();
     }

     submit(user: User) {
         console.log("User " + user.email + " created!");
         this.user = new User();
             
         
     }
}