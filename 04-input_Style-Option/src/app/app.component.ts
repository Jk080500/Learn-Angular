import { Component } from '@angular/core';
import { StyleOptionAndRulesComponent } from './style-option-and-rules/style-option-and-rules.component';

@Component({
  selector: 'app-root',
  imports: [StyleOptionAndRulesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  username = '';

  getUsername(event: Event) {
    // this.username = (event.target as HTMLInputElement).value;
  }
  setUsername() {
    this.username = 'No Name';
  }

  getUserNameWithTemplate(val: string) {
    this.username = val;
    console.log(this.username);
  }
}
