import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModule } from "./features/authentication/login/login.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}