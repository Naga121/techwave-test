import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  httpOption:any;

  constructor(private http:HttpClient) { }

  postEnquiry(obj:any):Observable<object>{
    this.httpOption ={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post("http://localhost:3000/enquiry",obj,this.httpOption);
  }
}
