import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { TravelService } from './travel.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel';
  user = faUser;



  constructor(public auth: AuthService, public service: TravelService) {

    service.getMyUser();

  }
}
