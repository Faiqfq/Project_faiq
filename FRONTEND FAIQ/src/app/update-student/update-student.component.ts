import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})


export class UpdateStudentComponent implements OnInit {

  studentForm = new FormGroup({
    'studentName':new FormControl('',Validators.required),
    'courseName':new FormControl('',Validators.required),
    'phoneNumber':new FormControl('',Validators.required),
    'semester':new FormControl('',Validators.required),
    'age':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOnestudent(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.studentForm.patchValue({
            studentName:res.data[0].studentName,
            courseName:res.data[0].courseName,
            phoneNumber:res.data[0].phoneNumber,
            semester:res.data[0].semester,
            age:res.data[0].age
        });
      });
  }
//to update a student
studentUpdate()
{
  console.log(this.studentForm.value);
    this.service.updatestudent(this.router.snapshot.params['id'], this.studentForm.value).subscribe((result:any)=>{

    this.studentForm.reset();
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}

