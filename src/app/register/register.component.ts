import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerUser: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor(private _user: UserService) { }

  ngOnInit() {
  }
  
  registerSubmit() {
    console.log(this.registerUser)
    return this._user.register(this.registerUser) 
      .subscribe(
        newUser => console.log(newUser, 'registration successful')
      )
  }

}
