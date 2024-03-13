import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit{
  message:string="";
  user:User=new User('','',0,'');
  users:User[]=[];
  constructor(private userservice:UserService) {
  }
  ngOnInit(): void {
    this.getAllUsers();  
  }
  saveToDB(){
    this.userservice.saveToDB(this.user).subscribe();
  }
  getUser(){                                               //it is an arrow function=this arrow function is used to defined function
   this.userservice.getUser(this.user.username).subscribe(userobject=>this.user=userobject);
  }
  deleteUser(){
    this.userservice.deleteUser(this.user.username).subscribe(message=>{
      if(message)
      this.message="Record deleted";
    else this.message="something went wrong";
    });
  }
  getAllUsers(){
    this.userservice.getAllUser().subscribe(arrayFormResponse=>this.users=arrayFormResponse);
 }
}
