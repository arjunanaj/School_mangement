import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Login } from '../_class/login';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';
import { faExclamationCircle,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements  OnInit {
lock=faLock
resetpassword=false;
updatepassword=false;
login:Login=new Login();
emailId:string;
otp:string
validotp:string;
changeOtp=false
success=faCheckCircle
error=faExclamationCircle;
constructor(private loginService:LoginService,private router:Router){}
 ngOnInit(): void {
   this.loginService.canAuthenticate()
 }
getUserNow(){
 this.getUser()
}

getUser(){
 
  this.loginService.getUser(this.login.emailId).subscribe((data)=>{
      
    if(data.status==200){
      this.emailId=this.login.emailId
      $('#modalId').show();
    }
  })
}

sendOtp(){
  this.loginService.sendOtpByEmail(this.login.emailId).subscribe((data)=>{
if(data){
  $('#modalId1').show();
}
  })
}
checkOTP(){

}
resetNow(){
  if(this.login.password!=this.login.confirmPassword){
    $('#statusErrorsModal').show();
  }else{
     this.updateUser()
  }
}
updateUser(){
this.loginService.updateUser(this.emailId,this.login).subscribe((data)=>{
  if(data.status==200){
    $('#statussuccesssModal').show();
  }
})
}

closeModel(){
  $('#statusErrorsModal').hide();
 }
 onBackTopassword(){

  $('#modalId').hide();
 }
 onBackTootp(){
  $('#modalId1').hide();
 }
 sucessModel(){
  $('#statussuccesssModal').hide();
  this.router.navigate(['/signin'])
 }
}
