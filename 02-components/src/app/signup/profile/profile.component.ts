import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  //   template: '<h1>Profile Component Working fine</h1>',
  //   styles: 'h1{background-color:red}',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  notes = 'This Profile is a custom component printing in app component';
}
