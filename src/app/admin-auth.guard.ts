import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SchoolService } from './School.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._serv.adminLoggedIn()){
        return true
      }else{
        alert("Please Login")
        this._rout.navigateByUrl("adminLogin")
        return false
      }
  }
  constructor(private _serv:SchoolService,private _rout:Router){

  }
  
}
