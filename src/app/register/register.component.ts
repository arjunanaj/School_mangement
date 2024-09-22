import { Component, OnInit } from '@angular/core';
import { Register } from '../_class/register';
import { RegisterService } from '../_services/register.service';
import * as $ from 'jquery';

import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:Register=new Register();
  registering=false
  error=faExclamationCircle;
  success=faCheckCircle
  constructor(private registerService:RegisterService,private router:Router,public loginService:LoginService){}

ngOnInit(): void {
  this.loginService.canAuthenticate()
}
  registerNow(){
    if(this.register.password!=this.register.confirmPassword){
      $('#statusErrorsModal').show();
    }else{
       this.addUser()
    }
   
   }
   closePasswordModel(){
    $('#statusErrorsModal').hide();
   }

   addUser(){
        this.registerService.addNewUser(this.register).subscribe((data)=>{
          if(data.status==201){
            $("#statussuccesssModal").show()
          
          }
        } ,(error)=>{
          console.log(error.error)
          if(error.error=="Id Already Exists You Cannot Insert Pls Check :" ){
            $('#backendErrorsModal').show();
          }
           
        })
   }
   closeBackendModel(){
    $('#backendErrorsModal').hide();
   }
   sucessModel(){
    this.router.navigate(['/signin'])
    $('#statussuccesssModal').hide();

  }
}
