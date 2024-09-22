import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddAbstractService {


  private basicUrl:String="http://localhost:9091"
  constructor( private httpclient:HttpClient,private router:Router) { }


  public addNewAbstract(absdef:string,absImage:any):Observable<HttpResponse<any>>{
    const formData: FormData = new FormData();
    formData.append('file', absImage, absImage.name);
    return this.httpclient.post<any>(`${this.basicUrl}/abstract/addAbstract?absDef=${absdef} `,formData,{observe:'response',responseType:'text' as 'json'})
  }

  public getAbstractDef():Observable<any>{
    return this.httpclient.get<any>(`${this.basicUrl}/abstract/getAbstract`)
  
  }
  public getAbstractImage():Observable<Blob>{
    return this.httpclient.get(`${this.basicUrl}/abstract/getAbstractImage`,{ responseType: 'blob' })
  
  }
  public updateAbstract(absdef:string,absImage:any):Observable<HttpResponse<any>>{
    const formData: FormData = new FormData();
    formData.append('file', absImage, absImage.name);
    return this.httpclient.put<any>(`${this.basicUrl}/abstract/updateAbstract?absDef=${absdef} `,formData,{observe:'response',responseType:'text' as 'json'})
  }
 
}
