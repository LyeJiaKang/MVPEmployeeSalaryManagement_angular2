import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserUploadService {

  uploadedFiles: Array < File > ;
  constructor(private http:HttpClient) { }


public doUserUpload(element){
  this.uploadedFiles = element.target.files;
  
    let formData = new FormData();
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("file", this.uploadedFiles[i]);
        }

        return this.http.post('http://localhost:8080/user/upload', formData,{responseType: 'text'});
}

}
