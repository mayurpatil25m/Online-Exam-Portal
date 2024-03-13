import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

    constructor(private httpclient:HttpClient) 
    { 
    }
  
    saveResult(result:Result)
    {
      return this.httpclient.post<void>("http://localhost:8080/saveResult",result);
    }
  
    getResults(subject:string)
    {
      return this.httpclient.get<Result[]>("http://localhost:8080/getResults/"+subject);
    }
  
    getResults2(subject:string,startIndex:number)
    {
      return this.httpclient.get<Result[]>("http://localhost:8080/getResults2/"+subject+"/"+startIndex);
    }
  }
  
  
  export class Result
  {
    username:string;
    subject:string;
    score:any;
  
  
    constructor(username:string, subject:string,score:number)
    {
      this.username=username;
      this.subject=subject;
      this.score=score;
    }
  
  }
  
