import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  name=""
  rollNo=""
  admno=""
  mobileNo=""
  clgName=""
  parentName=""
  parentPhno=""
  userName=""
  pass=""

  studEntry=()=>
  {
    let studData:any ={"name":this.name,"rollNo":this.rollNo,
                        "admno":this.admno,"mobileNo":this.mobileNo,
                        "clgName":this.clgName,"parentName":this.parentName,
                        "parentPhno":this.parentPhno,"userName":this.userName,
                        "pass":this.pass}

    console.log(studData);
  }
  
  
}
