import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LikeButtonComponent } from "./Components/like-button/like-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LikeButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-like-button';
}
