import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../Services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:any;

  constructor(private cs:ContactService) { 

    this.cs.getContact().subscribe(
      (data)=>{
        this.contact = data;
      },
      ()=>{
        this.contact = [];
      }
    )
  }

  ngOnInit(): void {
  }

}
