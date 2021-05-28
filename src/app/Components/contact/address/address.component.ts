import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  // chileld contact...
  @Input() contact:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
