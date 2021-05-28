import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boxs',
  templateUrl: './boxs.component.html',
  styleUrls: ['./boxs.component.css']
})
export class BoxsComponent implements OnInit {

  constructor() { }
  
  @Input() title:any;
  @Input('item') things:any; 
  @Output('listen') send:EventEmitter<string>=new EventEmitter<string>(); 


  ngOnInit(): void {
  }

  clicked(x:string){
    this.send.emit(x);
  }

}
