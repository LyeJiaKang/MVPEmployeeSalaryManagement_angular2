import { Component, OnInit } from '@angular/core';
import { UserUploadService } from '../user-upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-upload',
  templateUrl: './user-upload.component.html',
  styleUrls: ['./user-upload.component.css']
})
export class UserUploadComponent implements OnInit {
  message:String;

  uploadedFiles: Array < File > ;

  constructor(private service:UserUploadService) { }

  ngOnInit(): void {
  }

  public createUserUpload(id){
      this.service.doUserUpload(id);
  }

 public fileChange(element) {
   if(element == null){
    this.message = 'Please select a input file.'
   }else{
    this.service.doUserUpload(element).subscribe(data => {
      if(data == 'true'){
       this.message = 'Data file processed successfully.';
      }else{
       this.message = 'Data file processed unsuccessfully.';
      }
     
   });
   }
 
}



}
