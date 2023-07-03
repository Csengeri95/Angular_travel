import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Registermodel } from '../registermodel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerModel:Registermodel=new Registermodel();

  constructor(public auth:AuthService) {}

}
