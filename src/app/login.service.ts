import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Detail } from './model/detail';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  emp: Detail = new Detail();
  arr: Detail[] = []
  appData: string = " ";
  users: User[] = [];
  currentUser: User | null = null;

 
 constructor() { }
  


 registerUser(newuser: User) {
  this.users.push(newuser);
  console.log("Reg Success" + JSON.stringify(newuser))

}
login(loginUser: User): boolean {
  console.log(loginUser)
  

  let found: User[] = this.users.filter(
    user => { return JSON.stringify(user.emailId).toLowerCase().includes(loginUser.emailId) });
  console.log("Found user" + JSON.stringify(found))
  if (found.length == 1 && found[0].password == loginUser.password) {
    this.currentUser = loginUser;
    return true;
  }
  else {

    return false;

  }
}
logout() {
  this.currentUser = null;
}
getLoginUser(): User | null {
  return this.currentUser;
}

setdata(empData: Detail) {

  this.emp = empData
  this.arr.push(this.emp)
}

getdata() {

  return this.emp
}
}