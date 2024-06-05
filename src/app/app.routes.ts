import { Routes } from '@angular/router';
import { LoginComponent } from "./features/authentication/login/login.component";
import { SignupComponent } from "./features/authentication/signup/signup.component"
import { ForgotPasswordComponent } from './features/authentication/forgot-password/forgot-password.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "passwordrecovery",
        component: ForgotPasswordComponent
    }
];
