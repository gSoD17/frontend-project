import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {
    email: '',
    password: ''
  }

  constructor(private _user: UserService, private _router: Router) { }

  ngOnInit() {
  }
  
  loginSubmit() {
    console.log(this.user)
    return this._user.login(this.user)
      .subscribe(
        userRes =>{ console.log(userRes, 'Login Successful')
        this._router.navigate(['/home'])
        // save token here
        sessionStorage.setItem('token', userRes.token)
        sessionStorage.setItem('userId', userRes.userId)
        }
      )
  }

}
