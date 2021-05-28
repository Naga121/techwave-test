import { Component, OnInit } from '@angular/core';
import { DataService } from 'projects/techwave/src/app/Services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about:string="";
  overview:string[]=[];

  constructor(private ds:DataService) {

     this.about = this.ds.getAbout();
     this.overview = this.ds.getOverview();
     
  }

  ngOnInit(): void {
  }

}
