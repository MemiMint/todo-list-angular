import { Routes } from '@angular/router';
import { LoginComponent } from "./features/authentication/login/login.component";
import { SignupComponent } from "./features/authentication/signup/signup.component"

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    }
];
