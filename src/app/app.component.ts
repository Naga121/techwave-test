import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techwave';
  msg="";

  boxes=["Vegetables","Fruits","Spices","Chocalates"];

  itemlist=[
    ['Potato','Tomato','Onion','Beans','Cabbage'],
    ['Apple','Orange','Mango','Grapes','Banana'],
    ['Cinnamon','Cumin','Cardamom','Pepper'],
    ['Cadbury','Nestle'],
    ['Mobile','Laptop','Camera','Pendrive']
  ];

  receive(boxno:number,data:string){
    this.msg= this.boxes[boxno]+ " is clicked and the item selected is "+data;
  }
}

