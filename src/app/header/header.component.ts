import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Register } from '../_class/register';
import { RegisterService } from '../_services/register.service';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  signOuticon=faSignOutAlt
  registering=false;
  emailId=this.loginservice.isGetUserId()
  selectedFile:File
  image:string;
  profileImage="";
  checkImage=false;
  success=faCheckCircle
  showModal="viewProfileModal"
ngOnInit(): void {

 this.getImages()
  
}

constructor(public loginservice:LoginService,public router:Router,private registerService:RegisterService){}


logout(){
  this.loginservice.isRemoveToken();
  this.loginservice.canAccess();
   this.router.navigate(['/abstract'])
}
onclickToProfile(){
  this.showModal="viewEditModal"

 }
 onFileChanged(event:any): void {
  this.selectedFile = event.target.files[0];
}
 uploadImage(){
  this.registerService.addImage(this.emailId,this.selectedFile).subscribe((data)=>{
    if(data.status==200){
      $('#successsModal').show();
    }
  })
 }
 getImages(){
  this.registerService.getImage(this.emailId).subscribe((data:any)=>{

   if(data.size==0){ 
     this.checkImage=true;
   }else{
    this.checkImage=false;
    const reader = new FileReader();
    reader.onloadend = () => {
      this. profileImage = reader.result as string;
    };
    reader.readAsDataURL(data);
  }
  
  })
 }
 closeEditModal(){
  this.showModal="viewProfileModal"
 }

 sucessModel(){
  this.showModal="viewProfileModal"
  window.location.reload();
  this.image=""
  $('#successsModal').hide();
  
}

}