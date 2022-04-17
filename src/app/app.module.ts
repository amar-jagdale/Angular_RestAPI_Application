import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { NgToastModule } from 'ng-angular-popup';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeFilterPipe } from './employee-dashboard/employee-filter.pipe';

import { NgxPaginationModule } from 'ngx-pagination';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListOfUserDashboardComponent } from './list-of-user-dashboard/list-of-user-dashboard.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { UserFilterPipe } from './list-of-user-dashboard/user-filter.pipes';
import { UpdateListOfUserComponent } from './update-list-of-user/update-list-of-user.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    PageNotFoundComponent,
    EmployeeDashboardComponent,
    EmployeeFilterPipe, // Custom Search filter pipe
    UserFilterPipe,
    LoginTemplateComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    ListOfUserDashboardComponent,
    AddNewUserComponent,
    UpdateListOfUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    NgToastModule,
    Ng2SearchPipeModule,
    RouterModule,
    NgxPaginationModule, // Pagination
    FormsModule  
  ],
  providers: [AuthGuard], 
  bootstrap: [AppComponent]
})
export class AppModule { }

