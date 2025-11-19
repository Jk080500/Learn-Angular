import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count = 0;

  handleCounter(value: string) {
    if (value === 'minus') {
      if (this.count === 0) {
        this.count = 0;
      } else {
        this.count = this.count - 1;
      }
    } else if (value === 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }
}
