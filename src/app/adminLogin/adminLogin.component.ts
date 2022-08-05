import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolService } from '../School.service';

@Component({
  selector: 'app-adminLogin',
  templateUrl: './adminLogin.component.html',
  styleUrls: ['./adminLogin.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private _serv: SchoolService, private rout: Router) { }
  admin: any
  myAdmin: any
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern("")]),
    password: new FormControl('', Validators.required)
  })

  ngOnInit() {
  }

  findAdmin(user: any) {
    return user.role == "admin"
  }

  loginAdmin() {
    this._serv.getData().subscribe(res => {
      this.admin = res
      this.myAdmin = this.admin.find(this.findAdmin)
      console.log(this.myAdmin);
      if(this.myAdmin.username==this.loginForm.value.username&&this.myAdmin.password==this.loginForm.value.password){
        alert("Login Success")
        localStorage.setItem("adminLoggedIn","yes")
        this.rout.navigateByUrl("adminInterface")

      }else{
        alert("Invalid Credentials")
      }
    })
  }
}
