import { Component } from '@angular/core';
import { AdminService, Result } from '../admin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultdisplay',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './resultdisplay.component.html',
  styleUrl: './resultdisplay.component.css'
})
export class ResultdisplayComponent {

  results:Result[]=[];
  subject:string="";
  pages:number[]=[];
  no:number=0;

  show:boolean=false;
  
  constructor(private adminService:AdminService)
  {

  }

  showRecords()
  {
    this.show=false;
    this.pages.length=0;

    console.log('subject is ' + this.subject);

    this.adminService.getResults(this.subject).subscribe(array=>{
      
      this.results=array;

      let pageno=1;

      while(3*pageno<array.length)
      {
        this.pages.push(pageno);
        pageno=pageno+1;
        
      }

      this.pages.push(pageno);

      console.log("Total Pages " + pageno);
    
    
    });

  }

  // 3 records
  // 11 records
  
  
  getResults2(pageno:number)
  {
    this.show=true;
    this.adminService.getResults2(this.subject,pageno).subscribe(array=>this.results=array);
  }
  
  
  
  }
