export class listofUsermodel{
    id:number=0;
    email:string='';
    first_name:string='';
    last_name:string='';
    avatar?:string='';  // this property is optional
  //  name?:string='';
  //  job?:string='';
    constructor(){
        //this.id=0;
        this.email='';
        this.first_name='';
        this.last_name='';
        this.avatar='';
    //    this.name='';
    //    this.job='';
    }
}