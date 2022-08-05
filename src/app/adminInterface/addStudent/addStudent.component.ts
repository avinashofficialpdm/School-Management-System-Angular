import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addStudent',
  templateUrl: './addStudent.component.html',
  styleUrls: ['./addStudent.component.css']
})
export class AddStudentComponent implements OnInit {

  classes: any[] = [
    {value: '+1', viewValue: '+1'},
    {value: '+2', viewValue: '+2'}
  ];
  divisions: any[] = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
    {value: 'c', viewValue: 'c'}
  ];
  genders: any[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'others', viewValue: 'Others'}
  ];
  subjects: any[] = [
    {value: 'science', viewValue: 'Science'},
    {value: 'commerce', viewValue: 'Commerce'},
    {value: 'humanities', viewValue: 'Humanities'}
  ];

  constructor() { }

  addForm = new FormGroup({
    studentName:new FormControl(''),
    dob:new FormControl(''),
    class:new FormControl(''),
    division:new FormControl(''),
    gender:new FormControl(''),
    subject:new FormControl('')
  })
  ngOnInit() {
  }

}
