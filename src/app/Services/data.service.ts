import { Injectable } from '@angular/core';
import { content } from '../Model/data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  // About ------- 
  getAbout():string{
    return content.about;
  }
   // Overview ---------------
  getOverview():string[]{
    return content.overview;
  }

}
