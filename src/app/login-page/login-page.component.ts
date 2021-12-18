import { Component, OnInit } from '@angular/core';
import { Person } from '../model/Person';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private user: Person = {id:1,username:'',password:''};
  constructor() {
   }

  ngOnInit(): void {
  }
  attemptLogin(name : String){
    console.info("Attempting to login", name);
    this.user.id=1;
    this.user.username = name;
    console.info(this.user);
  }
}
