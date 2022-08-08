import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';


@Component({
  selector: 'app-studentNavbar',
  templateUrl: './studentNavbar.component.html',
  styleUrls: ['./studentNavbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  constructor(private _rout: Router) { }

  @Input() id:any

  ngOnInit() {
  }
  logOut() {
    if (confirm("Are you sure to Logout?")) {
      localStorage.removeItem("currentLoggedInStudent")
      this._rout.navigateByUrl("studentLogin")
    }
  }

  changePassword(){
    this._rout.navigateByUrl("changePassword"+"/"+this.id)
  }
}
