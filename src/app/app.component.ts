import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LoginModule } from "./features/authentication/login/login.module";
import { SignUpModule } from './features/authentication/signup/signup.module';
import { ForgotPasswordModule } from './features/authentication/forgot-password/forgot-password.module';
import { DashboardModule } from './features/dashboard/dashboard.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    LoginModule, 
    SignUpModule, 
    ForgotPasswordModule,
    DashboardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}