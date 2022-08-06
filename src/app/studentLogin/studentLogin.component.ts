import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolService } from '../School.service';


@Component({
  selector: 'app-studentLogin',
  templateUrl: './studentLogin.component.html',
  styleUrls: ['./studentLogin.component.css']
})
export class StudentLoginComponent implements OnInit {

  constructor(private _serv: SchoolService, private rout: Router) { }

  datas: any
  currentStudent: any
  studentLoginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  findStudent(user: any) {
    return user.username == this.studentLoginForm.value.username
  }

  loginStudent() {
    this._serv.getData().subscribe((res: any) => {
      this.datas = res
      if (this.datas.find((element: any) => element.username == this.studentLoginForm.value.username && element.role == "student")) {
        let foundStudent = this.datas.find((element: any) => element.username == this.studentLoginForm.value.username && element.role == "student")
        // console.log(foundStudent);
        if (foundStudent.username == this.studentLoginForm.value.username && foundStudent.password == this.studentLoginForm.value.password) {
          alert("Login Success")
          // console.log(foundStudent.username);
          localStorage.setItem("currentLoggedInStudent", foundStudent.username)
          this.rout.navigateByUrl("studentInterface")
        } else {
          alert("Incorrect password")
        }
      } else {
        alert("No student Found with this username ")
      }
    })
  }
  ngOnInit() {


  }

}
