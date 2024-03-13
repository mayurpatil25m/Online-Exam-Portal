import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

  constructor(private router:Router)
  {

  }
  showResult()
  {
      this.router.navigateByUrl("resultdisplay");
  }

  showQuestion()
  {
    this.router.navigateByUrl("admin");
  }

}
