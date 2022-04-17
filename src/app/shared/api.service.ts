import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { map} from "rxjs/operators";
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //this property available across the application can be injectable any component
})
export class ApiService {
  
  constructor(private http:HttpClient) { }
 
   //for Post Api-- Signup
  //  postSignUpdata(data:any){
  //   return this.http.post<any>("http://localhost:3000/SignupUsers",data);
  // }

  // for get Api-- fetch Login details from Db.json
  // getSignUpdata(){
  //   return this.http.get<any>("http://localhost:3000/SignupUsers");
  // }
  // getLoginDetails(data1:any)
  // {
  // console.log("data1")
  // return this.http.get<any>("http://localhost:3000/SignupUsers")
  // }

// ********************************* Rest API Login-Signup ***************************************

  postLoginDetails(data:any)
  {
  // console.log("data1")
  return this.http.post<any>("https://reqres.in/api/login",data);
  }

  // postSignUpdata(data:any){
  //   return this.http.post<any>("https://reqres.in/api/users?page=2",data);
  // }

  postSignUpdata(data:any){
    return this.http.post<any>("https://reqres.in/api/register",data);
  }


// ***********************************************************************************


  // UserName Exists for New Employee Registration
//This goes into service
validateUsernameNotTaken(control: AbstractControl) {
  return this.checkUsernameNotTaken(control.value).pipe(
    map(res => {
      return res ? null : { usernameAlreadyTaken: true };
    })
  );
}

//Fake API call -- You can have this in another service
checkUsernameNotTaken(email: string):Observable<boolean> {
  return this.http.get<any>("http://localhost:3000/posts").pipe(map((usernameList: Array<any>) =>usernameList.filter(user => user.email === email)
  ),
    map(users => !users.length)
  );  
}


  // ************************************************************
  // -------------------- SignUp for is FirstName Exists -------------------
  validateEmailNotTaken(control:AbstractControl){
    return this.chechSignupEmailNotTaken(control.value).pipe(
      map(res=>{ return res ? null :{emailAlreadyTaken:true};
    })
    );
  }

 chechSignupEmailNotTaken(email:string){
   return this.http.get<any>("http://localhost:3000/SignupUsers").pipe(map((emailList:Array<any>)=>emailList.filter(res=>res.email===email)
   ),
   map(emails=>!emails.length)
   );
 }

// *********************************************************

  // employee
  postData(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data);

}
  
  getData(){
    return this.http.get<any>("http://localhost:3000/posts");
  
}

updateData(data:any,id:number){
  return this.http.put<any>("http://localhost:3000/posts/"+id,data);
}

deleteData(id:number){
  return this.http.delete<any>("http://localhost:3000/posts/"+id);
}



// **************************** REST_API  *****************************************
// postUserData(data:any){
//   return this.http.post<any>("https://reqres.in/api/users?page=2",data);

// }
//Create New User
postUserData(data:any){
  return this.http.post<any>("https://reqres.in/api/users",data);

}

//get users list
getUserData(){
  return this.http.get<any>("https://reqres.in/api/users?page=2");

}

updateUserData(data:any,id:number){
  return this.http.put<any>("https://reqres.in/api/users/2"+id,data);
}

deleteUserData(id:number){
  return this.http.delete<any>("https://reqres.in/api/users/2"+id);
}

getCurrentData(id:number){
  return this.http.get<any>("https://reqres.in/api/users/2"+id);
}

updateuser(id:number,data:any){
  return this.http.put<any>("https://reqres.in/api/users/2"+id,data);

}
// *****************************************************************************


}

