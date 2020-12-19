import { Component, OnInit } from '@angular/core';
import { UserViewService } from '../user-view.service';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {

  constructor(private service:UserViewService) { }
  minSalary : number;
  maxSalary : number;
  sort:string;
  order:string;
  result:any;
  currentPage:number;
  offset:Number;
  errorMessage:string;
  ngOnInit(): void {
    this.currentPage = 0;
  }

  onSubmit(){
    this.result = null;
    this.errorMessage  = " ";
    if(typeof(this.order) != "undefined"){
     
      this.service.filterUser(this.minSalary,this.maxSalary,this.order,this.sort,0,30).subscribe(data => {
        this.result = data;
        if(this.result.length == 0){
          this.errorMessage = "No record available.";
        }
     },
     response =>{
     if(response.status!= 200){
      this.errorMessage = "Error 200.";
      
     }}
     );
    }else{
      this.errorMessage = "Please select the order option.";
    }
  }

  public nextPage(){
    
    if(this.result!=null){
      if(this.result.length == 30){
        this.currentPage= this.currentPage +1;
        this.service.filterUser(this.minSalary,this.maxSalary,this.order,this.sort,this.currentPage*30,30).subscribe(data => {
          this.result = data;
          
       });
      }
    }
    
  }

  public prePage(){
    if(this.currentPage != 0){
      this.currentPage = this.currentPage -1;
      this.offset = this.currentPage*30;
      this.service.filterUser(this.minSalary,this.maxSalary,this.order,this.sort,this.offset,30).subscribe(data => {
        this.result = data;
        
     });
    }
  }

}
