import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../School.service';

@Component({
  selector: 'app-studentInterFace',
  templateUrl: './studentInterFace.component.html',
  styleUrls: ['./studentInterFace.component.css']
})
export class StudentInterFaceComponent implements OnInit {

  currentLoggedInStudent:any
  currentLoggedInStudentid:any
  constructor(private _serv:SchoolService) { }

  ngOnInit() {
    // this.currentLoggedInStudent=localStorage.getItem("currentLoggedInStudent")
    this._serv.getData().subscribe((res:any)=>{
      let datas=res
      this.currentLoggedInStudent=datas.find((element:any)=>element.username==localStorage.getItem("currentLoggedInStudent"))
      // console.log(this.currentLoggedInStudent);
      this.currentLoggedInStudentid=this.currentLoggedInStudent.id
      console.log(this.currentLoggedInStudentid);
      
    })
  }

}
