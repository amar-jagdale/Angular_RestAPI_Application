import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'; 
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
import { NgToastModule, NgToastService} from 'ng-angular-popup';
import { ActivatedRoute } from '@angular/router'; 
  // import{listofUsermodel} from '../list-of-user-dashboard/list-of-user-model';
@Component({
  selector: 'app-update-list-of-user',
  templateUrl: './update-list-of-user.component.html',
  styleUrls: ['./update-list-of-user.component.css']
})
export class UpdateListOfUserComponent implements OnInit {
   editUser=new FormGroup({
     email: new FormControl(''),
     first_name: new FormControl(''),
     last_name: new FormControl(''),
     avatar: new FormControl(''),

   })
  constructor(private api:ApiService, private toast:NgToastService , private router:Router, private route:ActivatedRoute, private formBuilder:FormBuilder) { }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
      this.api.getCurrentData(this.route.snapshot.params['id']).subscribe((res)=>{
        console.log(res);
        this.editUser=new FormGroup({
          email: new FormControl(res['email']),
          first_name: new FormControl(res['first_name']),
          last_name: new FormControl(res['last_name']),
          avatar: new FormControl(res['avatar']),
     
        })

      })
  }
  
  Update(){
    this.api.updateuser(this.route.snapshot.params['id'],this.editUser.value).subscribe((res)=>{
      this.toast.success({detail:"Data Updated Successfully....!",summary:"Success Message", duration:5000})

    })
  }



//   getallUsers(){
//     this.api.getUserData().subscribe(res=>{
//       console.log(res);      
//     this.listofUserData=res.data;
//     console.log(this.listofUserData);
// })
}




