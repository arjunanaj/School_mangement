import { Component } from '@angular/core';
import { LoginService } from '../_services/login.service';

import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AddAbstractService } from '../_services/add-abstract.service';
import { Abstract } from '../_class/abstract';

@Component({
  selector: 'app-add-abstract',
  templateUrl: './add-abstract.component.html',
  styleUrls: ['./add-abstract.component.css']
})
export class AddAbstractComponent {

addabstract:Abstract=new Abstract();
updatesAbstract:Abstract=new Abstract();
  success=faCheckCircle
  error=faExclamationCircle
  addloginning=false;
  updateloginning=false
  addabstractImage:File
  updateabstractImg:File;
   showSuccessModel:string
   showErrorModel:string
  


  constructor(public loginService:LoginService,public addAbstractService:AddAbstractService,public router:Router){}
  ngOnInit(): void {
    this.loginService.canAuthenticate()
    this.getSingleAbstract()
   
  }

  getSingleAbstract(){
    this.addAbstractService.getAbstractDef().subscribe((data)=>{
      
       this.updatesAbstract.abstractDef=data.abstractDef;
    

    },(error)=>{
  
   } )
  }


  onAddFileChanged(event:any){
    this.addabstractImage = event.target.files[0]
  }
  OnAddNewAbstract(){

   this.addAbstractService.addNewAbstract(this.addabstract.abstractDef,this.addabstractImage).subscribe((data)=>{
   
    $('#statussuccesssModal').show();
     this.showSuccessModel="add"
   },(error)=>{
    console.log(error.error)
    if(error.error=="Service.Max_Limit_reached_Def"){
      this.showErrorModel="Service.Max_Limit_reached_Def"
      $('#statusErrorModal').show();

    }else if(error.error=="Service.Max_Limit_reached_Img"){
      this.showErrorModel="Service.Max_Limit_reached_Img"
      $('#statusErrorModal').show();
    }
   })
  }

  onUpdateFileChanged(event:any){
     
    this.updateabstractImg = event.target.files[0]
  }
  onUpdateAbstract(){
   
  this.addAbstractService.updateAbstract(this.updatesAbstract.abstractDef,this.updateabstractImg).subscribe((data)=>{
    $('#statussuccesssModal').show();
     this.showSuccessModel="update"
  
  },(error)=>{
    console.log(error.error)
    if(error.error=="Service.Max_Limit_reached_Def"){
      this.showErrorModel="Service.Max_Limit_reached_Def"
      $('#statusErrorModal').show();

    }else if(error.error=="Service.Max_Limit_reached_Img"){
      this.showErrorModel="Service.Max_Limit_reached_Img"
      $('#statusErrorModal').show();
    }
   })
  }

  sucessModel(){
    $('#statussuccesssModal').hide();
    this.router.navigate(["/abstract"])
  }
  existsModel(){
    $('#statusErrorModal').hide();
 
  }

  
}
