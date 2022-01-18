import { Component, OnInit } from '@angular/core';

import { AuthService } from './../services/auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User= {
    login: '',
    password:''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin(){
    this.authService.doLogin(this.user);
  }

}
