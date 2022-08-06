import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolService } from 'src/app/School.service';

@Component({
  selector: 'app-addStudent',
  templateUrl: './addStudent.component.html',
  styleUrls: ['./addStudent.component.css']
})
export class AddStudentComponent implements OnInit {

  datas:any
  constructor(private serv:SchoolService,private _rout:Router) { }

  addForm = new FormGroup({
    studentName:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    class:new FormControl('',[Validators.required]),
    division:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    subject:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    role:new FormControl('student')
  })

  ngOnInit() {
  }

  add(){
    this.serv.getData().subscribe((res:any)=>{
      if(res.findIndex((user:any)=>user.username==this.addForm.value.username)==-1){
        console.log("can be added");
        this.serv.addStudent(this.addForm.value)
        // this._rout.navigateByUrl("addStudent")
        // alert("Added Successfully")
        window.location.reload()
      }else{
        alert("Username is taken.. Choose another username")
        
      }
      
    })
  }

  hide=true
  classes: any[] = [
    {value: '+1', viewValue: '+1'},
    {value: '+2', viewValue: '+2'}
  ];
  divisions: any[] = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
    {value: 'C', viewValue: 'C'}
  ];
  genders: any[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Others', viewValue: 'Others'}
  ];
  subjects: any[] = [
    {value: 'Science', viewValue: 'Science'},
    {value: 'Commerce', viewValue: 'Commerce'},
    {value: 'Humanities', viewValue: 'Humanities'}
  ];

}
