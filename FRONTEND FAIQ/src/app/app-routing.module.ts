import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';

import { addstudentComponent } from './add-student/add-student.component';
import { StudentComponent } from './student/student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';



const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'home', component: HomeComponent},
 
  {path: 'addstudent', component:addstudentComponent},
  {path: 'student', component:StudentComponent},
  {path: 'addstudent/:id', component:addstudentComponent},
  {path: 'updatestudent', component:UpdateStudentComponent},
  {path: 'updatestudent/:id', component:UpdateStudentComponent}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
