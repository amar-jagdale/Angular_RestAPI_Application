import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { ApiService } from '../shared/api.service';
import { NgToastService } from 'ng-angular-popup';
import { FormBuilder, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent{

  constructor(private formbuilder:FormBuilder, private http:HttpClient, private api:ApiService,
    private router:Router, private toast:NgToastService) { }
@ViewChild("form")
  // ngOnInit(): void {
  // }
loginform!:NgForm;
onlogin(form:NgForm){
console.log("Login-Template Here...")
this.api.postLoginDetails(this.loginform.value).subscribe(res=>{
  console.log(res);
  // const user=res.find((a:any)=>{
  //   return a.email === this.loginform.value.email && a.password === this.loginform.value.password
  // });
  console.log(res);
  if(res){
    console.log(this.loginform)
    this.toast.success({detail:this.loginform.value.email+" "+"Logged in Successfully....!",summary:"Success Message", duration:5000})
   
    //alert("Login Succesfull");
    localStorage.setItem('isLoggedIn','true');
    localStorage.setItem('email',this.loginform.value.email);
    // toast success
      // if login success then navigate to my Dashboard        
   this.router.navigate(['list-of-user-dashboard']);       
   this.loginform.reset(); 
  }
  else{
    //alert("Wrong Username & Password plz try again");
    //toast error
    this.toast.error({detail:"Error Message",summary:"Invalid Username or Password plz try again",duration:5000})
    this.loginform.reset();
  }
},err=>{
  // alert("Something Went wrong")
  this.toast.error({detail:"Error Message",summary:"Invalid Username or Password plz try again",duration:5000})
})
}

}
