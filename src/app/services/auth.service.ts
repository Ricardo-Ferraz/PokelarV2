import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { User } from './../login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean= false;
  trustedUsers: User[]= [
    {login: 'admin', password: 'admin'},
    {login: 'ricardo', password: '123456'}
  ]

  isAuthenticate(): boolean{
    return this.isAuth;
  }

  constructor(private router: Router) { }

  doLogin(user: User){
    this.trustedUsers.forEach((element: User) => {
      if(element.login === user.login && element.password === user.password) {
        this.isAuth= true;

        this.router.navigate(['/']);
      }
    });
  }
}
