import { Component } from '@angular/core';
import { ForgotPassword } from './forgot-password';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent extends ForgotPassword {
  public sendEmail = async () => {
    this.loading = true;

    setTimeout(() => {
      console.info("email was sent");
      this.loading = false;
    }, 3000);
  }
}
