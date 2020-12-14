import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserViewService {
  orderEncode:string;
  constructor(private http:HttpClient) { }

  public filterUser(minSalary,maxSalary,order,sort,offset,limit){
      if(order == '+'){
        this.orderEncode = '%2B';
      }else if (order == '-'){
        this.orderEncode = '%2D';
      }

          return this.http.get('http://localhost:8080/users?minSalary='+minSalary+'&maxSalary='+maxSalary+'&offset='+offset+'&limit='+limit+'&sort='+this.orderEncode+sort);
  }
}
