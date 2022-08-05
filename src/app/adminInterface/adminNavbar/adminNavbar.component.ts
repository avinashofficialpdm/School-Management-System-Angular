import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminNavbar',
  templateUrl: './adminNavbar.component.html',
  styleUrls: ['./adminNavbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private _rout:Router) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem("adminLoggedIn")
    this._rout.navigateByUrl("adminLogin")
  }
}
