import { Component } from '@angular/core';
import { SignUp } from './signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent extends SignUp { 

  public signUp = () => {
    this.loading = true;

    setTimeout(() => {
      console.log("Account created!: ", this.name, this.password);
      this.loading = false;
    }, 3000)
  } 
}
