import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'; 
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
import{listofUsermodel} from '../list-of-user-dashboard/list-of-user-model';
import { NgToastModule, NgToastService} from 'ng-angular-popup';
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private api:ApiService, private router:Router,private toast:NgToastService) { }
  
  listofuserObj:listofUsermodel=new listofUsermodel();
  
formValue!: FormGroup;
listofUserData:listofUsermodel[]=[];
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  ngOnInit(): void {
    this.formValue=this.formBuilder.group({   
      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      avatar:['']
      // name:['',[Validators.required]],
      // job:['',[Validators.required]]
    })
    //this.getallUsers();
    console.log(this.listofUserData);
  }

  getallUsers(){
    this.api.getUserData().subscribe(res=>{
      console.log(res);      
    this.listofUserData=res.data;
    console.log(this.listofUserData);
})
}
  postUserDetails(){
    //alert("fucntion call");
 this.listofuserObj.id=this.formValue.value.id; 
 this.listofuserObj.email=this.formValue.value.email;
 this.listofuserObj.first_name=this.formValue.value.first_name; 
 this.listofuserObj.last_name=this.formValue.value.last_name; 
 this.listofuserObj.avatar=this.formValue.value.avatar; 

    
    let cancel=document.getElementById("cancel");
    this.api.postUserData(this.listofuserObj).subscribe(res=>{
      // check is value is comes on console or not
        console.log(res.data);    
        this.listofUserData=res.data
        //alert("Record inserted successfully");
        this.toast.success({detail:this.listofuserObj.first_name+" "+"Details Added Successfully",summary:"Employee Registered...",duration:2000})
        cancel?.click();
        this.formValue.reset();
       // this.getallUsers();
       this.router.navigate(['list-of-user-dashboard']);       

      },
      err=>{
        console.log("Error While Employee Registration....");
        this.toast.error({detail:"Please Enter correct required values",summary:"Error while Registration of employee"})
      })
     }
 

}
