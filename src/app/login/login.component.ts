import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LoginService } from '../login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
  user: User = new User();
  isLoginFailed:boolean=false;





  constructor(private loginservice: LoginService, private router: Router) {
   
   }



  ngOnInit(): void {
  
  }


  login() {
    this.loginservice.registerUser(this.user)
    if (this.loginservice.login(this.user)){
      this.isLoginFailed=false;
      this.router.navigateByUrl("/profile")
      console.log("Login Success")
    }
      
    else{
      console.log("Login Failed.")
      this.isLoginFailed=true;
    }
      

  }

}
