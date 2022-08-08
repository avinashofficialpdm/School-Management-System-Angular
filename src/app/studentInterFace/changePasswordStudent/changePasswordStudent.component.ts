import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from 'src/app/School.service';

@Component({
  selector: 'app-changePasswordStudent',
  templateUrl: './changePasswordStudent.component.html',
  styleUrls: ['./changePasswordStudent.component.css']
})
export class ChangePasswordStudentComponent implements OnInit {

  id:any
  constructor(private route:ActivatedRoute,private serv:SchoolService,private _rout:Router) { }
  hide = true

  changePassword=new FormGroup({
    currentPassword:new FormControl(''),
    newPassword:new FormControl('')
  })

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id")    
  }

  changePasswordFn(){
    this.serv.getData().subscribe((res:any)=>{
      let currentStudent = res.find((element:any)=>element.id==this.id)
      if(currentStudent.password==this.changePassword.value.currentPassword){
        this.serv.changeStudentPassword({"password":this.changePassword.value.newPassword},this.id)
        alert("Success")
        this. _rout.navigateByUrl("/studentInterface")
      }else{
        alert("Current password you entered is wrong")
      }
    })
  }
}
