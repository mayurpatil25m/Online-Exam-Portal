import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Admin, User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{


  subject:string="";


  subjects:string[]=[];

  message:any="";

  admin:Admin=new Admin('','');

  user:User=new User('','',0,'');

  
  constructor(private userservice:UserService,private router:Router, private questionService:QuestionService)
  {

  }

  ngOnInit(): void {
    this.message=sessionStorage.getItem("message"); 
    this.questionService.getAllSubjects().subscribe(subjects=>this.subjects=subjects);
    
  }

  showRegister()
  {
    this.router.navigate(['register']);
  }
  validate()
  {
      this.userservice.validate(this.user).subscribe(answer=>{

        if(answer)
        {
          this.router.navigate(['question']);

          sessionStorage.setItem("username",this.user.username);

          sessionStorage.setItem("subject",this.subject);

        }

        else
        {
          this.router.navigate(['login']);

          this.message="invalid credentials";

        }


      });
  

  }

  validate2()
  {
    this.admin.username=this.user.username;
    this.admin.password=this.user.password;

      this.userservice.validate2(this.admin).subscribe(answer=>{if(answer)
      {
        this.router.navigate(['admindashboard']);
      }
    
      else
      {
        this.router.navigate(['login']);
        this.message="invalid credentials";
      }
    });
  }
}



