import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ApiserviceService } from './apiservice.service';

import { addstudentComponent } from './add-student/add-student.component';
import { StudentComponent } from './student/student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FAQComponent,
    HomeComponent,
   
    addstudentComponent,
    StudentComponent,
    UpdateStudentComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
