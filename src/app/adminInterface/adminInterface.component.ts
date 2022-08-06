import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../School.service';

@Component({
  selector: 'app-adminInterface',
  templateUrl: './adminInterface.component.html',
  styleUrls: ['./adminInterface.component.css']
})
export class AdminInterfaceComponent implements OnInit {

  result:any
  studentsList : any[]=[]
  constructor(private _serv:SchoolService,private _rout:Router) { }

  ngOnInit() {

    this._serv.getData().subscribe(res=>{
      this.result=res
      this.result.forEach((user:any) => {
        if(user.role=="student"){
          this.studentsList.push(user)
        }
      });
      
    })
  }

  deleteUser(id:number){
    if(confirm("Are you sure you want to delete this Student")){
      this._serv.deleteUser(id)
    }
  }

}
