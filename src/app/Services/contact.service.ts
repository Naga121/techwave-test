import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { content } from '../Model/data';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http:HttpClient) { }

  // Contact---
  getContact():Observable<object>{
    return this.http.get("http://localhost:3000/contacts");

  }

  // details ---
  getDetails(id:number):Observable<object>{
    return this.http.get("http://localhost:3000/details/"+id);

  }
  
}
