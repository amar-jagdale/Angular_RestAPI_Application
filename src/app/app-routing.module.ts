import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AuthGuard } from './Auth/auth.guard';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ListOfUserDashboardComponent } from './list-of-user-dashboard/list-of-user-dashboard.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { NotAuthGuard } from './NoAuth/not-auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { ActivatedRoute, Params } from '@angular/router';
import { UpdateListOfUserComponent } from './update-list-of-user/update-list-of-user.component';

const routes: Routes = [
    {path:'', redirectTo:'auth/login-template',pathMatch:'full'},
    // {path:'login-template',canActivate:[AuthGuard],component:LoginTemplateComponent},   
    {path:'auth/login-template',canActivate:[NotAuthGuard],component:LoginTemplateComponent},
    {path:'auth/signup', component:SignupComponent,canActivate:[NotAuthGuard]},
    {path:'auth/employee-dashboard', component:EmployeeDashboardComponent},
    {path:'addNewUser', component:AddNewUserComponent}, 
    {path:'updateUser/:id', component:UpdateListOfUserComponent},
    {path:'list-of-user-dashboard',canActivate:[AuthGuard], component:ListOfUserDashboardComponent},
  // {path:'employee-dashboard',component:EmployeeDashboardComponent},
  // {path:'login', component:LoginComponent},
  // {path:'signup', component:SignupComponent},
      // sequence is must after that PNF C enter
     {path:'**',component:PageNotFoundComponent}      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
