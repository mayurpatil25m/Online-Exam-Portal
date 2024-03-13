import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  saveToDB(user:User)
  {
       return this.httpclient.post("http://localhost:8080/saveToDB" , user);
  }

  saveToDB2(securityQuestion:SecurityQuestion)
  {
       return this.httpclient.post("http://localhost:8080/saveToDB2" , securityQuestion);
  }

  public checking(securityQuestion:SecurityQuestion)
  {
    return this.httpclient.post<boolean>("http://localhost:8080/checking",securityQuestion);
      
  }
  
  updatePassword(username:string,password:string)
  {
    return this.httpclient.get<boolean>("http://localhost:8080/updatePassword/"+username+"/"+password);


  }

validate(user:User)
{
     return this.httpclient.post<boolean>("http://localhost:8080/validate" , user);
}

validate2(admin:Admin):Observable<boolean>
  {
       return this.httpclient.post<boolean>("http://localhost:8080/validate2",admin);

    
  }

getUser(username:string){
    return this.httpclient.get<User>("http://localhost:8080/getUser/"+ username)
}

deleteUser(username:string){
  return this.httpclient.delete<Boolean>("http://localhost:8080/deleteUser/"+ username)
}

getAllUser(){
  return this.httpclient.get<User[]>("http://localhost:8080/getAllUser")

   }

}

export class User{

  username:string;
  password:string;
  mobno:number;
  emailid:string;


  constructor(username:string,password:string,mobno:number,emailid:string)
  {
    this.username=username;
    this.password=password;
    this.mobno=mobno;
    this.emailid=emailid;

  }
}

export class Admin
{
  username:string;
  password:string;
 

  constructor(username:string,password:string)
  {
    this.username=username;
    this.password=password;
  
  }
}


export class SecurityQuestion
{
  username:string;
  question:string;
  answer:string;

  constructor(username:string,question:string,answer:string)
  {
    this.username=username;
    this.question=question;

    this.answer=answer;
  
  }
}
