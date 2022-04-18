import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-alura';
  public yesNoAnswer: 'yes' | 'no' = 'no';
}
