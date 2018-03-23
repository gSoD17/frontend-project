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
        userRes => console.log(userRes, 'res')
      )
    // this._router.navigate(['/home'])
  }
  
  goNavigate() {
    this._router.navigate(['/home'])
  }

}
