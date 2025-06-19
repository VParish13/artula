import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  //selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class App {
  protected title = 'ArtulaWiki.App';
}
