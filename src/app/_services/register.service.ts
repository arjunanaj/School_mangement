import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../_class/register';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private basicUrl:String="http://localhost:9091"
  constructor( private httpclient:HttpClient) { }

  public addNewUser(register:Register):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(`${this.basicUrl}/Register/addNewUser`,register,{observe:'response',responseType:'text' as 'json'})
  }
  public addImage(emailId:string,file:File):Observable<HttpResponse<any>>{
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.httpclient.put(`${this.basicUrl}/Register/updateUserImage?emailId=${emailId}`,formData,{observe:'response',responseType:'text' as 'json'});
  }
  public getImage(name:string):Observable<any>{
    return this.httpclient.get(`${this.basicUrl}/Register/getImage?emailId=${name}`,{observe:'response', responseType: 'blob' })
  }
}
