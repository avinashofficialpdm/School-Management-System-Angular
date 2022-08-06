import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private _http: HttpClient,private _rout:Router) { }

  baseUrl = "http://localhost:3000/posts"

  getData() {
    return this._http.get("http://localhost:3000/posts")
  }

  adminLoggedIn() {
    return !!localStorage.getItem("adminLoggedIn")
  }
  studentLoggedIn() {
    return !!localStorage.getItem("currentLoggedInStudent")
  }
  addStudent(studentData: object) {
    this._http.post(this.baseUrl, studentData).subscribe({
      next() { alert("success") },
      error() { alert("Failed") }
    })
  }

  deleteUser(id: number) {
    this._http.delete(this.baseUrl + "/" + id).subscribe({
      next() {
        alert("Deleted Successfully")
        window.location.reload()
      },
      error() { alert("Failed") }
    })
  }

  editStudent(updatedData:any,id:number){
    this._http.put(this.baseUrl+"/"+id,updatedData).subscribe({
      next(){
        alert("Updated Successfully");
      },
      error(){
        alert("Failed")
      }
    })

    
  }
}
