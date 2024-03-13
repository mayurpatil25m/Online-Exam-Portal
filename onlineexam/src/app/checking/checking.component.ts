import { Component } from '@angular/core';
import { SecurityQuestion, UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checking',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './checking.component.html',
  styleUrl: './checking.component.css'
})
export class CheckingComponent {

  username:string="";
  question:string="what is your favourite color?";
  answer:string="";
  password:string="";
  show:boolean=false;
  message:string="";

  securityQuestion:SecurityQuestion=new SecurityQuestion('','','');

  constructor(private userservice:UserService,private router:Router)
  {

  }

  updatePassword()
  {
    this.userservice.updatePassword(this.username,this.password).subscribe(answer=>{this.router.navigateByUrl('login')});
  }

  checking()
  {
    this.securityQuestion.username=this.username;
    this.securityQuestion.answer=this.answer;
    this.userservice.checking(this.securityQuestion).subscribe(answer=>{
        if(answer)
        {
           this.show=true;
           this.message="";
        }
        else
        {
          this.message="wrong answer. try again";
        }
    
    });

  }

}
