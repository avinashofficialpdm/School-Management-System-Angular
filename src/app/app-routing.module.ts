import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './admin-auth.guard';
import { AddStudentComponent } from './adminInterface/addStudent/addStudent.component';
import { AdminInterfaceComponent } from './adminInterface/adminInterface.component';
import { AdminLoginComponent } from './adminLogin/adminLogin.component';
import { StudentLoginComponent } from './studentLogin/studentLogin.component';
import { WelcomePageComponent } from './WelcomePage/WelcomePage.component';

const routes: Routes = [
  {
    path:"",
    component:WelcomePageComponent
  },
  {
    path:"studentLogin",
    component:StudentLoginComponent
  },
  {
    path:'adminLogin',
    component:AdminLoginComponent
  },
  {
    path:'adminInterface',
    component:AdminInterfaceComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'addStudent',
    component:AddStudentComponent,
    canActivate:[AdminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
