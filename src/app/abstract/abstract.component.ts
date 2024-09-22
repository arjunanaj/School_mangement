import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';

import { AddAbstractService } from '../_services/add-abstract.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent  implements OnInit{



  abstractDef:string;
  abstractImg:string;


   serverErrorDef=true;
   serverErrorImg=true;
  constructor(public loginService:LoginService,public addAbstractService:AddAbstractService,private router:Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.loginService.canAuthenticate()
    this.getAbstractDef();
    this.getAbstractImg()
   
  }

  getAbstractDef(){
    this.addAbstractService.getAbstractDef().subscribe((data)=>{
    if(data.abstractDef){
      this.serverErrorDef=false
    }
     this.abstractDef=data.abstractDef;

    
    },(error)=>{
   
      if(error.status==500){
        this.serverErrorDef=false
       }   
   } )
  }

  getAbstractImg(){
    this.addAbstractService.getAbstractImage().subscribe((data)=>{
      console.log(data.size)
      if(data){
          this.serverErrorDef=false
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        this.abstractImg = reader.result as string;
      };
      reader.readAsDataURL(data);
     
    },(error)=>{
    console.log(error)
     if(error.status==500){
      this.serverErrorImg=false
     }     
    })
  }
  retry(){
  
  
        window.location.reload();
 
  }

}
