import { Component, OnInit } from '@angular/core';
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

  constructor(private _user: UserService) { }

  ngOnInit() {
  }
  
  loginSubmit() {
    console.log(this.user)
    return this._user.login(this.user)
      .subscribe(
        userRes => console.log(userRes, 'res')
      )
  }

}
