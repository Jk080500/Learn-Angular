import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Learn Angular';
  ang_defn =
    'Javascript framework for web development, Single Page Application ( means No Reload on menu changes), Developed and Maintained By Google, Node should be installed to use the angular, Angular follows the MVC Architecture, Angular js and Angular are different';

  topic = 'Interpolation';
  definition =
    'Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters';
  addition_example = '<h2>{{20+10}}</h2>';
  uppercase_example2 = '<h3>{{text.toUpperCase()}}<h3>';
  angular_cli =
    'Angular CLI(Command Line Interface) is a tool that helps developers create, build, test and deploy Angular applications';
}
