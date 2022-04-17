import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import { listofUsermodel } from './list-of-user-model';
import * as $ from 'jquery';

@Pipe({
    name:'userFilter',
    pure:false
})
export class UserFilterPipe implements PipeTransform{
    transform(listofUserData:listofUsermodel[],searchTerm:string):listofUsermodel[] {
     console.log('searchbefore',listofUserData)
        if(!listofUserData || !searchTerm){
            //return alert("No Data Found");            
            return listofUserData;     

        }     
        let serachResult=listofUserData.filter(Empres=>Empres.email?.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);        
      console.log('after',serachResult);
       if(serachResult.length>0)
       {
        $('#Nodata').hide();    
        return serachResult;
       }
       else{
           $('#Nodata').show();
           return serachResult;      
        // alert("No Data Found");
       }      
       
       // if(serachResult)
        // return employeeData.filter(Empres=>Empres.firstName.toLowerCase()||Empres.lastName.toLowerCase()
        // ||Empres.Email.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
}