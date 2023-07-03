import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Loginmodel } from '../loginmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginModel: Loginmodel = new Loginmodel();

  constructor(public auth: AuthService) {

  }

}
