import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../_class/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private basicUrl:String="http://localhost:9091"
  constructor( private httpclient:HttpClient,private router:Router) { }

  public addNewUser(student:Student):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(`${this.basicUrl}/Student/addstudent`,student,{observe:'response',responseType:'text' as 'json'})
  }
  public getAllUser():Observable<Student[]>{
    return this.httpclient.get<Student[]>(`${this.basicUrl}/Student/getAllStudent`)
  }
  
  public getSingleUser(id:number):Observable<Student>{
    return this.httpclient.get<Student>(`${this.basicUrl}/Student/getstudentById?id=${id}`)
  }

  public getSingleUserByName(name:String):Observable<Student>{
    return this.httpclient.get<Student>(`${this.basicUrl}/Student/getstudentByName?name=${name}`)
  }

  public deleteUser(id:number):Observable<HttpResponse<any>>{
    return this.httpclient.delete<any>(`${this.basicUrl}/Student/deleteStudent?id=${id}`,{observe:'response',responseType:'text' as 'json'})
  }

  public updateUser(id:number,student:Student):Observable<HttpResponse<any>>{
    return this.httpclient.put<any>(`${this.basicUrl}/Student/updateStudent?id=${id}`,student,{observe:'response',responseType:'text' as 'json'})
  }

  public updateUserByName(name:String,student:Student):Observable<HttpResponse<any>>{
    return this.httpclient.put<any>(`${this.basicUrl}/Student/updateStudentByName?name=${name}`,student,{observe:'response',responseType:'text' as 'json'})
  }

}
