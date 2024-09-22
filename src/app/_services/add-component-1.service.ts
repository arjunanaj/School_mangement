import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Componentss } from '../_class/componentss';




@Injectable({
  providedIn: 'root'
})
export class AddComponent1Service {

  private basicUrl:String="http://localhost:9091"
  constructor( private httpclient:HttpClient,private router:Router) { }


  public addNewComponent1(cmpdef:string,cmpImage1:any,cmpImage2:any,cmpImage3:any):Observable<HttpResponse<any>>{
    const formData: FormData = new FormData();
    formData.append('file1', cmpImage1, cmpImage1.name);
    formData.append('file2', cmpImage2, cmpImage2.name);
    formData.append('file3', cmpImage3, cmpImage3.name);
    return this.httpclient.post<any>(`${this.basicUrl}/component_1/addComponent_1?cmpDef=${cmpdef} `,formData,{observe:'response',responseType:'text' as 'json'})
  }


  public getComponentDef():Observable<Componentss>{
    return this.httpclient.get<any>(`${this.basicUrl}/component_1/getcomponent_1`)
  
  }
  public getComponentImage1():Observable<Blob>{
    return this.httpclient.get(`${this.basicUrl}/component_1/getcomponent_1Image1`,{ responseType: 'blob' })
  
  }
  public getComponentImage2():Observable<Blob>{
    return this.httpclient.get(`${this.basicUrl}/component_1/getcomponent_1Image2`,{ responseType: 'blob' })
  
  }
  public getComponentImage3():Observable<Blob>{
    return this.httpclient.get(`${this.basicUrl}/component_1/getcomponent_1Image3`,{ responseType: 'blob' })
  
  }
  public updateComponent1(cmpdef:string,cmpImage1:any,cmpImage2:any,cmpImage3:any):Observable<HttpResponse<any>>{
    const formData: FormData = new FormData();
    formData.append('file1', cmpImage1, cmpImage1.name);
    formData.append('file2', cmpImage2, cmpImage2.name);
    formData.append('file3', cmpImage3, cmpImage3.name);
    return this.httpclient.put<any>(`${this.basicUrl}?component_1/updateComponent_1?cmpDef=${cmpdef} `,formData,{observe:'response',responseType:'text' as 'json'})
  }
}
