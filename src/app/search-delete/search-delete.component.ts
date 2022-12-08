import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent {

  constructor(private api:ApiService){}
  name=""
  searchData:any=[]
  readValue=()=>{
    let data = {"name":this.name}
    console.log(data)
    this.api.searchStudentDetails(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("No result")
        }
        else{
          this.searchData=response
        }
      }
    )
  }
  deleteButtonClick=(id:any)=>
  {
    let data:any={id:id}
    this.api.deleteStudent(data).subscribe(
      (response:any)=>{console.log(response);
      }
    )
  }

}
