import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { ContactService } from '../../../Services/contact.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;
  record:any;
  

  constructor(private route:ActivatedRoute, private cs:ContactService) {
    this.route.params.subscribe( param => this.id = param['id']);
    this.cs.getDetails(this.id).subscribe(
      (data)=>{this.record = data
      console.log(data)
      },
      
      ()=> {this.record =[]}
    );
  }

  ngOnInit(): void {
  }

}
