import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { AdminComponent } from './admin/admin.component';
import { CheckingComponent } from './checking/checking.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ResultComponent } from './result/result.component';
import { ResultdisplayComponent } from './resultdisplay/resultdisplay.component';

export const routes: Routes = [
    

    {path:'userex',component:UserComponent},

    {path:'register',component:RegisterComponent},

    {path:'login',component:LoginComponent},

    {path:'question',component:QuestionComponent},

    {path:'score',component:ScoreComponent},

    {path:'admin',component:AdminComponent},

    {path:'checking',component:CheckingComponent},

    {path:'admindashboard',component:AdmindashboardComponent},

    {path:'resultdisplay',component:ResultdisplayComponent},

    {path:'',redirectTo:'login',pathMatch:'full'}

];
