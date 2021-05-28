import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../Services/enquiry.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fname:string="";
  lname:string="";
  email:string="";
  cname:string="";
  msg:string="";

  errors:string[]=[];

  constructor( private eq:EnquiryService) { }

  ngOnInit(): void {

  }

  submit(){

    this.errors = [];
    let expr = /^[a-zA-Z0-9.!#$%&’*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if( this.fname.length<3)
      this.errors.push("First Namr should be 4 Letters")
    if( this.lname.length<3)
      this.errors.push("Last Namr should be 4 Letters")
    if(!expr.test(this.email))
      this.errors.push("Email should be in format")
    if( this.cname.length<3)
      this.errors.push("Company Name should be 4 Letters")
    if( this.msg.length<10)
      this.errors.push("Message should be 10 Letters")

    if(this.errors.length==0){
      let obj ={
        id:Math.round(Math.random()*1000),
        fname: this.fname,
        lname: this.lname,
        email:this.email,
        cname:this.cname,
        msg:this.msg
      }
      this.eq.postEnquiry(obj).subscribe(
        ()=>{
          alert("your enquirey is posted")
          this.fname="",
          this.lname="",
          this.email="",
          this.cname="",
          this.msg=""
        },
        ()=>{
          alert("there is a sum problem")
        }
      )
    }


  }

}
