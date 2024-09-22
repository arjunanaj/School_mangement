import { Component, OnInit } from '@angular/core';
import { Student } from '../_class/student';
import { StudentService } from '../_services/student.service';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import{ faEdit} from '@fortawesome/free-solid-svg-icons';
import{ faTrash} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faExclamationCircle, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../_services/login.service';
@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit{

  noOfItems:number=12;
  pageNo:number=1;
  total:number;
  searchByname:any;
  students:Student[]=[];
  right=faArrowRight 
  edit=faEdit;
  delete=faTrash;
  warning= faQuestionCircle
  singleStudent=new Student()
  success=faCheckCircle
  deleteId:number
  searchPerformed=false;
  showNgTemplate=false;
  constructor(public studentService:StudentService ,private router:Router,private loginservice:LoginService){}
  ngOnInit(): void {
    this.loginservice.canAccess()
    this.getAllUsers()
  } 
 

 

  getAllUsers(){
    this.studentService.getAllUser().subscribe((data)=>{
     this.students=data
     if(data.length==0){
      this.showNgTemplate=true
     }
    },(error)=>{
      console.log(error.statusText)
      this.showNgTemplate=true
    })
    

 }
  getStd(id:number){
 
     this.studentService.getSingleUser(id).subscribe((singledata)=>{
      if(singledata){
      this.singleStudent=singledata
    }
   })
  }
  

  deleteUser(id:number){
  $("#confirmModal").show();

  this.deleteId=id
 
  }



 confirmIt(){
  $("#confirmModal").hide()
  this.studentService.deleteUser(this.deleteId).subscribe((data)=>{
    if(data.status==200){
   
     $('#statussuccesssModal').show();
    }
   })
 }

 returnIt(){
  $("#confirmModal").hide()
 }

 updateStd(id:number){
 
  this.router.navigate(['/updateStudent',id])
  
   }

  sucessModel(){
    $('#statussuccesssModal').hide();
   window.location.reload()
  }


 search(){
  if(this.searchByname==""){
    this.ngOnInit();
    this.searchPerformed=false
  }else{
    this.students=this.students.filter( res=>{
      return res.firstName.toLocaleLowerCase().match(this.searchByname.toLocaleLowerCase())
    })
    if(this.students.length==0){
      this.searchPerformed=true
     }
  }
 }
}
