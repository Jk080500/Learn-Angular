import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './signup/profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SignupComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '02-components';

  //Properties or Global Variable and Datatypes
  name: String = 'JK';
  age: Number | String = '25years';
  numData: Number = 100;
  isLoggedIn: boolean = false;
  randomData: any;
  data: any = [];

  handleClickMe() {
    alert('Function Called on button click');
    this.anotherFunction(); // calling another function
  }

  async anotherFunction() {
    this.name = 'JK2';
    console.log('New Function Called');
    console.log(this.name);
    this.data = this.name;
    this.handleData();
  }

  handleData() {
    console.log(this.data);
  }

  sum(a: number, b: number) {
    let res: number | String;
    res = a + b;
    alert(res);
  }
}
