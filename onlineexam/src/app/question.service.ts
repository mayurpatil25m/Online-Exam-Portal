import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpclient:HttpClient) { }

  getFirstQuestion(subject:string)
  {
    return this.httpclient.get<Question>("http://localhost:8080/getFirstQuestion/"+subject);
  }

  nextQuestion()
  {
    return this.httpclient.get<Question>("http://localhost:8080/nextQuestion");
  }

  previousQuestion()
  {
    return this.httpclient.get<Question>("http://localhost:8080/previousQuestion");
  }
  
  saveAnswer(answer:Answer)
  {
    return this.httpclient.post<void>
    ("http://localhost:8080/saveAnswer",answer);
  }
  
  
  calculateScore(){
    return this.httpclient.get<number>("http://localhost:8080/calculateScore");
  }
  
  getAllAnswers()
  {
    return this.httpclient.get<Answer[]>("http://localhost:8080/getAllAnswers");
  }

  getAllSubjects()
  {
    return this.httpclient.get<string[]>("http://localhost:8080/getAllSubjects");
  }

  getAllQuestions(subject:string)
  {
    return this.httpclient.get<number[]>("http://localhost:8080/getAllQuestions/"+subject);
  }

  getQuestion(qno:number)
  {
    return this.httpclient.get<Question>("http://localhost:8080/getQuestion/"+qno);

  }

  addQuestion(question:Question)
  {
    return this.httpclient.post<boolean>("http://localhost:8080/addQuestion" , question);
  }

  updateQuestion(question: Question) 
  {
    return this.httpclient.put<boolean>("http://localhost:8080/updateQuestion" , question);
  }

  viewQuestion(qno:number,subject:string)
  {
    return this.httpclient.get<Question>("http://localhost:8080/viewQuestion/"+qno+"/"+subject);
  }
  
  deleteQuestion(qno:number,subject:string)
  {
    return this.httpclient.delete<boolean>("http://localhost:8080/deleteQuestion/"+qno+"/"+subject);
  }

}

export class Question
{
  qno:number;
  subject:string;
  qtext:string;
  op1:string;
  op2:string;
  op3:string;
  op4:string;
  answer:string;

   constructor(qno:number,subject:string,qtext:string,op1:string,op2:string,op3:string,op4:string,answer:string)
   {
    this.qno=qno;
    this.answer=answer;
    this.op1=op1;
    this.op2=op2;
    this.op3=op3;
    this.op4=op4;
    this.answer=answer;
    this.subject=subject;
    this.qtext=qtext;
   }
   
}


export class Answer
{
  qno:number;
  submittedAnswer:string;
  qtext:string;
  correctAnswer:string;
  
  constructor(qno:number,qtext:string,submittedAnswer:string,correctAnswer:string)
  {
      this.qno=qno;
      this.correctAnswer=correctAnswer;
      this.submittedAnswer=submittedAnswer;
      this.qtext=qtext;
  }
    
}

