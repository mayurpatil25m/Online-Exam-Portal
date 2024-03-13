import { Component } from '@angular/core';
import { Answer, QuestionService } from '../question.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService, Result } from '../admin.service';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {
 
  score:any=0;
  show:boolean=false;

  allAnswers:Answer[]=[];

  resultobj:Result=new Result('','',0);
  subject: any;
  username:any;

  constructor(private questionService:QuestionService,private adminservice:AdminService)
  {

    this.subject=sessionStorage.getItem("subject");
    this.username=sessionStorage.getItem("username");

  }

  ngOnInit(): void 
  {
    this.questionService.getAllAnswers().subscribe(answerarray=>{

      this.allAnswers=answerarray;
         if(answerarray.length!=0)
         {
             this.show=true;
         }

    });

    this.questionService.calculateScore().subscribe(score=>{
      this.score=score;

      this.resultobj.username=this.username;
    this.resultobj.subject=this.subject;
    this.resultobj.score=score;
  

    this.adminservice.saveResult(this.resultobj).subscribe();
    });
}

getColor(submittedanswer:string,correctAnswer:string)
{
  if(submittedanswer==correctAnswer)
  {
    return "green";
  }
  else{
    return "red";
    }

}

}
