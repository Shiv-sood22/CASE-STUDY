import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Detail } from '../model/detail';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  emp:Detail=new Detail;
  isFilled:boolean=false;

  constructor(private loginservice :LoginService ) {}
  str:Detail[]=[]

  ngOnInit(): void {
  }
  save(){
  
     
    this.str.unshift(this.emp)


  this.loginservice.setdata(this.emp)
  if(this.emp.email==""||this.emp.name==""||this.emp.firstName==""||this.emp.lastName==""
  ||this.emp.password==""){
  alert("Please Fill All The Details")
  }else{
  this.isFilled=true;
  console.log(this.str)
  this.emp=new Detail();
   }
 
 }
}
