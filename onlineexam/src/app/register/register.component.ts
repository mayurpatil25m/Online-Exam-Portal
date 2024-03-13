import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SecurityQuestion, User, UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user:User=new User('','',0,'');

  securityQuestion:SecurityQuestion=new SecurityQuestion('','','');

  question:string="what is your favourite color ?";
  answer:string="";

  constructor(private userservice:UserService,private router:Router)
  {

  }
    saveToDB()
    {
        this.userservice.saveToDB(this.user).subscribe();

        this.securityQuestion.username=this.user.username;
        this.securityQuestion.question=this.question;
        this.securityQuestion.answer=this.answer;

        this.userservice.saveToDB2(this.securityQuestion).subscribe();

        this.router.navigate(['login']);

        alert("Registration Successful Please Login!!")

        

    }


}
