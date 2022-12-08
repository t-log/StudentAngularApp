import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  name=""
  rollno=""
  admno=""
  mob=""
  clgName=""
  parentName=""
  parentPhno=""
  username=""
  password=""

  constructor(private api:ApiService){}

  readStudentDetails = ()=>{
    let studentData:any={"name":this.name,"rollno":this.rollno,"admno":this.admno,"mob":this.mob,
    "clgName":this.clgName,"parentName":this.parentName,"parentPhno":this.parentPhno,
    "username":this.username,"password":this.password}
    console.log(studentData)
    this.api.addStudentDetails(studentData).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Student Details Added Successfully")
        }
        else{
          alert("Something wrong happened!")
        }
      }
    )

  }
}
