import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class addstudentComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOnestudent(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.studentForm.patchValue({
          studentName:res.data[0].studentName,
          courseName:res.data[0].courseName,
          phoneNumber:res.data[0].phoneNumber,
          semester:res.data[0].semester,
          age:res.data[0].age,

      });
    });
  }
  }

  studentForm = new FormGroup({
    'studentName':new FormControl('',Validators.required),
    'courseName':new FormControl('',Validators.required),
    'phoneNumber':new FormControl('',Validators.required),
    'semester':new FormControl('',Validators.required),
    'age':new FormControl('',Validators.required)


  });

  //to create a new student
  studentSubmit(){
    if(this.studentForm.valid){
      console.log(this.studentForm.value);
      this.service.createstudent( this.studentForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.studentForm.reset();
        this.successmsg = res.message;
      });

    }
    else{
      this.errormsg = 'Invalid';
    }

  }
//to update a student
studentUpdate()
{
  console.log(this.studentForm.value,'updatedform');

  if(this.studentForm.valid)
  {
    this.service.updatestudent(this.studentForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'invalid';
  }
}
}
