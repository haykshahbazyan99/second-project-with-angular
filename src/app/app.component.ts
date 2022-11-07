import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: User;
  inputText: string = "Initial value";

  constructor() {

    this.user = new User();
    this.user.name = "Hayk Shahbazyan";
    this.user.designation = "Software Engneer";
    this.user.address = "Yerevan, Armenia",
    this.user.phone = [
      '1234 5678 8921',
      '7894 5689 1325'
    ];

  }

}
