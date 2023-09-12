import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url='http://localhost:3000/api/v1/officers'
  constructor(private http:HttpClient) { }
  allDetails(){
    return this.http.get(this.url);
  }
  saveUser(data:any){
    return this.http.post(this.url, data);
  }
}
