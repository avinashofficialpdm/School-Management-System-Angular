import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from 'src/app/School.service';

@Component({
  selector: 'app-editStudent',
  templateUrl: './editStudent.component.html',
  styleUrls: ['./editStudent.component.css']
})
export class EditStudentComponent implements OnInit {

  id: any
  studentData: any
  constructor(private route: ActivatedRoute, private serv: SchoolService, private _rout: Router) { }

  editForm = new FormGroup({
    studentName: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    class: new FormControl('', [Validators.required]),
    division: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('student')
  })

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.serv.getData().subscribe((res: any) => {
      let datas = res
      this.studentData = datas.find((element: any) => element.id == this.id)
      this.editForm.setValue({
        studentName: this.studentData.studentName, dob: this.studentData.dob,
        class: this.studentData.class, division: this.studentData.division,
        gender: this.studentData.gender, subject: this.studentData.subject,
        username: this.studentData.username, password: this.studentData.password,
        role: this.studentData.role
      })
    })

  }


  editStudent() {
    if (confirm("Save Changes?")) {
      this.serv.editStudent(this.editForm.value, this.id)
      this._rout.navigateByUrl("adminInterface")
    }
  }
  hide = true
  classes: any[] = [
    { value: '+1', viewValue: '+1' },
    { value: '+2', viewValue: '+2' }
  ];
  divisions: any[] = [
    { value: 'A', viewValue: 'A' },
    { value: 'B', viewValue: 'B' },
    { value: 'C', viewValue: 'C' }
  ];
  genders: any[] = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
    { value: 'Others', viewValue: 'Others' }
  ];
  subjects: any[] = [
    { value: 'Science', viewValue: 'Science' },
    { value: 'Commerce', viewValue: 'Commerce' },
    { value: 'Humanities', viewValue: 'Humanities' }
  ];
}
