import { Routes } from '@angular/router';
import { LoginComponent } from "./features/authentication/login/login.component";
import { SignupComponent } from "./features/authentication/signup/signup.component"
import { ForgotPasswordComponent } from './features/authentication/forgot-password/forgot-password.component';
import { ProjectComponent } from './features/dashboard/project/project.component';
import { ProjectsComponent } from './features/dashboard/projects/projects.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

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
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "project",
        component: ProjectComponent
    },
    {
        path: "projects",
        component: ProjectsComponent
    },
];
