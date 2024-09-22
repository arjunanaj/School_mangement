import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../_class/login';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  private basicUrl:String="http://localhost:9091";
  constructor( private httpclient:HttpClient,private router:Router) { }

  public validateUser(login:Login):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(`${this.basicUrl}/Login/ValidateUser`,login,{observe:'response',responseType:'text' as 'json'})
  }
  public getUser(emailId:string):Observable<HttpResponse<any>>{
    return this.httpclient.get<any>(`${this.basicUrl}/Login/getUser?emailId=${emailId}`,{observe:'response',responseType:'text' as 'json'})
  }
  public updateUser(emailId:string,login:Login):Observable<HttpResponse<any>>{
    return this.httpclient.put<any>(`${this.basicUrl}/Login/updateUser?emailId=${emailId}`,login,{observe:'response',responseType:'text' as 'json'})
  }

  public sendOtpByEmail(emailId:string):Observable<string>{
    return this.httpclient.post<string>(`${this.basicUrl}/Login/forgotPassword?email=${emailId}`,{observe:'response',responseType:'text' as 'json'})
  }


  isAuthenticate():boolean{
    if(sessionStorage.getItem("id")!=null){
      return true;
    }else{
      return false;
    }
  }
  canAccess(){
    if(!this.isAuthenticate()){
      this.router.navigate(['/signin']);
    }
  }

  canAuthenticate(){
    if(this.isAuthenticate()){
      
      this.router.navigate(['/showStudent']);
      
    }
  }
  isStroredToken(emailId:string){
    if(emailId!=null&&emailId!=undefined){
      sessionStorage.setItem('id',emailId )
    }
 
  }
 isGetUserId():any{

  return sessionStorage.getItem('id')
  
 }
  isRemoveToken(){
    sessionStorage.removeItem('id');
   }
}
