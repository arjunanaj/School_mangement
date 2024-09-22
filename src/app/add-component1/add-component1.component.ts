import { Component } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { AddComponent1Service } from '../_services/add-component-1.service';
import { Componentss } from '../_class/componentss';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-component1',
  templateUrl: './add-component1.component.html',
  styleUrls: ['./add-component1.component.css']
})
export class AddComponent1Component {

  
addComponent:Componentss=new Componentss()
updateComponent:Componentss=new Componentss()
success=faCheckCircle
error=faExclamationCircle
addloginning=false;
updateloginning=false
componentDefinition:any;

componentImage1:File
componentImage2:File
componentImage3:File
updatecomponentImage1:File
updatecomponentImage2:File
updatecomponentImage3:File

showSuccessModel:string
showErrorModel:string

//component-1

  constructor(public loginService:LoginService,public component1Service:AddComponent1Service,public router:Router){}
  ngOnInit(): void {
    this.loginService.canAuthenticate()
    this.getComponentDef()
  
   
  }
getComponentDef(){
  this.component1Service.getComponentDef().subscribe((data)=>{
    this.updateComponent.componentDef=data.componentDef
  })
}
  
  onAddFileChange(event: any, inputName: string): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      if (inputName === 'file1') {
        this.componentImage1 = fileList[0];
      } else if (inputName === 'file2') {
        this.componentImage2= fileList[0];
      } else if (inputName === 'file3') {
        this.componentImage3 = fileList[0];
      }
    }
  }

  onUpdateFileChange(event: any, inputName: string): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      if (inputName === 'file1') {
        this.updatecomponentImage1 = fileList[0];
      } else if (inputName === 'file2') {
        this.updatecomponentImage2= fileList[0];
      } else if (inputName === 'file3') {
        this.updatecomponentImage3 = fileList[0];
      }
    }
  }

  addNewComponent(){
    this.component1Service.addNewComponent1(this.addComponent.componentDef,this.componentImage1
      ,this.componentImage2,this.componentImage3).subscribe((data)=>{
        $('#statussuccesssModal').show();
        this.showSuccessModel="add"
      },(error)=>{
        console.log(error.error)
        if(error.error=="Service.Max_Limit_reached_Def"){
          this.showErrorModel="Service.Max_Limit_reached_Def"
          $('#statusErrorModal').show();
    
        }else if(error.error=="Service.Max_Limit_reached_Img_1"){
          this.showErrorModel="Service.Max_Limit_reached_Img_1"
          $('#statusErrorModal').show();
        }
        else if(error.error=="Service.Max_Limit_reached_Img_2"){
          this.showErrorModel="Service.Max_Limit_reached_Img_2"
          $('#statusErrorModal').show();
        }
        else if(error.error=="Service.Max_Limit_reached_Img_3"){
          this.showErrorModel="Service.Max_Limit_reached_Img_3"
          $('#statusErrorModal').show();
        }
        
       })
  }
  updateNewComponent(){
     this.component1Service.updateComponent1(this.updateComponent.componentDef,this.updatecomponentImage1,this.updatecomponentImage2,this.updatecomponentImage2).subscribe((data)=>{
      $('#statussuccesssModal').show();
      this.showSuccessModel="update"
     },(error)=>{
      console.log(error.error)
      if(error.error=="Service.Max_Limit_reached_Def"){
        this.showErrorModel="Service.Max_Limit_reached_Def"
        $('#statusErrorModal').show();
  
      }else if(error.error=="Service.Max_Limit_reached_Img_1"){
        this.showErrorModel="Service.Max_Limit_reached_Img_1"
        $('#statusErrorModal').show();
      }
      else if(error.error=="Service.Max_Limit_reached_Img_2"){
        this.showErrorModel="Service.Max_Limit_reached_Img_2"
        $('#statusErrorModal').show();
      }
      else if(error.error=="Service.Max_Limit_reached_Img_3"){
        this.showErrorModel="Service.Max_Limit_reached_Img_3"
        $('#statusErrorModal').show();
      }
     })
  }

  sucessModel(){
    $('#statussuccesssModal').hide();
    this.router.navigate(["/compo_1"])
  }
  existsModel(){
    $('#statusErrorModal').hide();
 
  }


}
