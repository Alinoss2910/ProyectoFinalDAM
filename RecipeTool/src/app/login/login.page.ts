import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  Username: string = ''
  Password: string = ''
  OpcionLogin: boolean = true

  constructor(private userService: UserService, private router:Router) { }

  login() {
    this.userService.login({Username: this.Username, Password: this.Password})
    .then((response) => {
      console.log(response.token)
      if (response.token != "") {
        this.router.navigate(['/tabs'])
      }
    })
  }

  register() {
    this.userService.register({Username: this.Username, Password: this.Password})
    .then((response) => {
      console.log(response.token)
      if (response.token != "") {
        this.router.navigate(['/tabs'])
      }
    })
  }

}
