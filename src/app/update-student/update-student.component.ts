import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../_class/student';
import { StudentService } from '../_services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheckCircle, faExclamationCircle, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../_services/login.service';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  loginning=false;
  updateStudent:Student=new Student();
  StudentId:any;
  name:string;
  success=faCheckCircle
  constructor(public studentService:StudentService ,private router:Router, private route:ActivatedRoute, private loginservice:LoginService){}

  ngOnInit(): void {
    this.loginservice.canAccess()
    
    this.StudentId=this.route.snapshot.params['id'];
    if(this.StudentId!=null&&this.name==null){
      this.studentService.getSingleUser(this.StudentId).subscribe((data)=>{
        this.updateStudent=data
         console.log(this.updateStudent)
       })
    }
   
    this.name=this.route.snapshot.params['name'];
    console.log(this.name)
    this.studentService.getSingleUserByName(this.name).subscribe((data)=>{
     this.updateStudent=data
      console.log(this.updateStudent)
    })

  }

  OnUpdateStudent(){

    if(this.StudentId!=null&&this.name==null){
    this.studentService.updateUser(this.StudentId,this.updateStudent).subscribe((data)=>{
      if(data.status==200){

        $('#statussuccesssModal').show()

      }
    })
  }
  this.studentService.updateUserByName(this.name,this.updateStudent).subscribe((data)=>{
    if(data.status==200){

      $('#statussuccesssModal').show()

    }
  })

  




  }

  sucessModel(){
    $('#statussuccesssModal').hide();
    this.router.navigate(['/showStudent'])
  }

 

}
