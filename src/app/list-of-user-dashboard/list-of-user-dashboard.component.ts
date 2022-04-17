import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'; 
import { ApiService } from '../shared/api.service';
import { listofUsermodel } from './list-of-user-model';
import { Router } from '@angular/router';
import { NgToastModule, NgToastService} from 'ng-angular-popup';
import{UserFilterPipe} from './user-filter.pipes'


@Component({
  selector: 'app-list-of-user-dashboard',
  templateUrl: './list-of-user-dashboard.component.html',
  styleUrls: ['./list-of-user-dashboard.component.css']
})
export class ListOfUserDashboardComponent implements OnInit {

  listofuserObj:listofUsermodel=new listofUsermodel();
  
showAdd!:boolean;
showUpdate!:boolean;
showUpdateTitle!:boolean;
showAddTitle!:boolean;
  
formValue!: FormGroup;
listofUserData:listofUsermodel[]=[];


//emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private formBuilder:FormBuilder, private api:ApiService, private router:Router,private toast:NgToastService) { }

  ngOnInit(): void {
    // this.formValue=this.formBuilder.group({   
    //   name:['',[Validators.required]],
    //   job:['',[Validators.required]]
    // })
    this.getallUsers();
   // console.log(this.listofUserData);
  }
//search property
searchTerm:any;
//paginate page property
page:any;  

  getallUsers(){
        this.api.getUserData().subscribe(res=>{
          console.log(res);      
        this.listofUserData=res.data;
        console.log(this.listofUserData);
    })
  }

//   postUserDetails(){
//     //alert("fucntion call");
//   //   this.listofuserObj.id=this.formValue.value.id;
//   //   this.listofuserObj.email=this.formValue.value.email;
//   //   this.listofuserObj.first_name=this.formValue.value.first_name;
//   //   this.listofuserObj.last_name=this.formValue.value.last_name;
//   //  this.listofuserObj.avatar=this.formValue.value.avatar;
//  this.listofuserObj.name=this.formValue.value.name;
//  this.listofuserObj.job=this.formValue.value.job; 
    
//     //  let cancel=document.getElementById("cancel");
//     this.api.postUserData(this.listofuserObj).subscribe(res=>{
//       // check is value is comes on console or not
//         console.log(res);    
//         //alert("Record inserted successfully");
//         this.toast.success({detail:this.listofuserObj.name+" "+"Details Added Successfully",summary:"Employee Registered...",duration:2000})
//         // cancel?.click();this.formValue.reset();
//         this.getallUsers();
//       },
//       err=>{
//         console.log("Error While Employee Registration....");
//         this.toast.error({detail:"Please Enter correct required values",summary:"Error while Registration of employee"})
//       })
//      }


deleteUser(row:any){

        this.api.deleteUserData(row.id).subscribe(a=>{        
        //alert("Record Deleted Succesfully");
        this.toast.success({detail:row.first_name+""+"Employee Details Deleted Successfully",summary:"Records Deleted",duration:3000})       
        // this.formValue.reset();
        console.log(row);
        this.getallUsers();
      })
    
    }
    updateUser(row:any){
      this.showAdd=false;
      this.showUpdate=true;
    
      this.showUpdateTitle=true;
      this.showAddTitle=false;
    
      this.listofuserObj.id=row.id;
      this.formValue.controls['email'].setValue(row.email);
      this.formValue.controls['first_name'].setValue(row.first_name);
      this.formValue.controls['last_name'].setValue(row.last_name);
      this.formValue.controls['avatar'].setValue(row.avatar);
    }
    
    updateUserDetails(){
    
      this.listofuserObj.email=this.formValue.value.email;
      this.listofuserObj.first_name=this.formValue.value.first_name;
      this.listofuserObj.last_name=this.formValue.value.last_name;
      //this.listofuserObj.avatar=this.formValue.value.avtarl;
      this.api.updateUserData(this.listofuserObj,this.listofuserObj.id).subscribe(a=>{
      console.log(a);
     // alert("Record updated Succesfully");
     
      this.toast.success({detail:this.listofuserObj.first_name+" "+"Details updated Successfully",summary:"Details Updated..."})
      let cancel=document.getElementById("cancel");
        cancel?.click();
        this.formValue.reset();
        this.getallUsers();
    
      })
    }
    // Logout Method.............
      logout()
      {
        //localStorage.removeItem('user');
        localStorage.clear();  
        this.router.navigate(['auth/login-template']);  
      }

}
