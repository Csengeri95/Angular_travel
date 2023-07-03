import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Travel } from '../travel';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  createModel: Travel = new Travel();
  constructor(public service: TravelService, private auth:AuthService) { 

    auth.protectContent()
  }

}
