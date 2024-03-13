import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Answer, Question, QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
 
  subject:any="";
  username:any="";
  question:Question=new Question(0,'','','','','','','');
  answer:Answer=new Answer(0,'','','');
  submittedAnswer: string="";
  allAnswers:Answer[]=[];
  selected=false;
  remainingTime:any=721;
  durationMessage:string="";
  allqnos:number[]=[];  


  
  constructor(private questionService:QuestionService,private router:Router)
  {

    this.subject=sessionStorage.getItem("subject");
    this.username=sessionStorage.getItem("username");

  }

  ngOnInit(): void {
    this.questionService.getFirstQuestion(this.subject).subscribe(question=>this.question=question);
    this.questionService.getAllQuestions(this.subject).subscribe(allqnos=>{this.allqnos=allqnos; console.log(this.allqnos.length)});

    setInterval(()=>{
      this.remainingTime=this.remainingTime-1;

      let minute=Math.floor(this.remainingTime/60);
      let second=this.remainingTime%60;

      this.durationMessage="Time remaining "+minute+":"+second;

      if(this.remainingTime==0)
      {
        this.endexam();
      }
  },1000)

  }

  nextQuestion()
  {
    this.selected=false;

    this.questionService.getAllAnswers().subscribe(answerarray=>this.allAnswers=answerarray);
    
    this.questionService.nextQuestion().subscribe(question=>this.question=question);
  }

  getQuestion(eventobject:any)
  {
      let questionNumber=eventobject.target.value;
      console.log("selected question number is " + questionNumber);

      this.questionService.getQuestion(questionNumber).subscribe(question=>this.question=question);
  }

  previousQuestion()
  {
    this.selected=false;

    this.questionService.getAllAnswers().subscribe(answerarray=>this.allAnswers=answerarray);

    this.questionService.previousQuestion().subscribe(question=>this.question=question);
  }

  getColor(currentOption:string)
  {
      
      for (let index = 0; index < this.allAnswers.length; index++) 
      {
        let answer = this.allAnswers[index];

        if(answer.qno==this.question.qno && answer.submittedAnswer==currentOption)
          return "green";
      }    
      return "red";
  }

  isChecked(currentOption:string)
  {
      
      for (let index = 0; index < this.allAnswers.length; index++) 
      {
        let answer = this.allAnswers[index];

        if(answer.qno==this.question.qno && answer.submittedAnswer===currentOption)
          return true;
      }    


      return false;
  }

  saveAnswer()
  {
   
   this.answer.qno=this.question.qno;
   this.answer.qtext=this.question.qtext;
   this.answer.correctAnswer=this.question.answer;

   this.answer.submittedAnswer=this.submittedAnswer;


   this.questionService.saveAnswer(this.answer).subscribe();


   
  }

  endexam()
  {
      this.router.navigateByUrl('score');
      
  }

}
