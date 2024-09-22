import { Component } from '@angular/core';
import { Student } from '../_class/student';
import { Router } from '@angular/router';
import { StudentService } from '../_services/student.service';
import { faCheckCircle, faExclamationCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor(public studentService:StudentService ,private router:Router,private loginservice:LoginService){}
  success=faCheckCircle
  error=faExclamationCircle
  loginning=false;
addStudent:Student=new Student();
warning= faQuestionCircle
OnAddStudent(){
  this.loginservice.canAccess()
 this.studentService.addNewUser(this.addStudent).subscribe((data)=>{
  if(data.status==201){
    $('#statussuccesssModal').show()
  }

 },(error)=>{

  if(error.error=="Service.Duplicate_Found"){
    $('#confirmModal').show()
    console.log(error)
  }
   }
  
 )
}


confirmIt(){
  
  $("#confirmModal").hide()

  this.router.navigate(['/updateStudentByName',this.addStudent.firstName])

 }

 returnIt(){
  $("#confirmModal").hide()
 }

sucessModel(){
  $('#statussuccesssModal').hide();
  this.router.navigate(["/showStudent"])
}
existsModel(){
  $('#statusErrorModal').hide();

}

 
}
