import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

constructor(private _http:HttpClient) { }


  getData(){
    return this._http.get("http://localhost:3000/posts")
  }

  adminLoggedIn(){
    return !!localStorage.getItem("adminLoggedIn")
  }
  
}
