import { Component, OnInit } from '@angular/core';
import { faFacebook ,faGoogle,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Login } from '../_class/login';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  facebook=faFacebook;
  google=faGoogle;
  tiwtter=faXTwitter
  error=faExclamationCircle
  success=faCheckCircle
  login:Login=new Login();
  loginning=false
 errorMessage=""
  
  constructor(private loginService:LoginService,private router:Router){}

  ngOnInit(): void {
    this.loginService.canAuthenticate()
  }
  loginNow(){
  this.validateUser()
  }

  validateUser(){
    this.loginService.validateUser(this.login).subscribe((data)=>{
     
      if(data.body==" User Logged Sucessfully"){
   
     
        this.loginService.isStroredToken(this.login.emailId)
       this.loginService.canAuthenticate()
    
      }else{
      
        $('#statusErrorsModal').show();
      }
    },(error)=>{
      if(error.error=="Id Not Found To Get  Pls Check The Id:"){
        console.log(error.error)
        $('#backendErrorsModal').show();
      }
    })
  }

  closeInvalidUserModel(){
    $('#statusErrorsModal').hide();
  }

  closeBackendModel(){
    $('#backendErrorsModal').hide();
  }

}
