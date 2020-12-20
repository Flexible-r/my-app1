import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  avt = {
    login: "",
    password: ""
  }
  if () {
    this.avt.login="admin";
    this.avt.password="admin";
    
  }
  avts: any[] = []
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Vhod() {
    localStorage.setItem("data", JSON.stringify(this.avt))
    this.avts.push({
      "login":this.avt.login,
      "password":this.avt.login
    })
  }

}
