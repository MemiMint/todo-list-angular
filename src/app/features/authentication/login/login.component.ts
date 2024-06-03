import { Component } from "@angular/core";


@Component({
    selector: "auth-login",
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.css",
})
export class LoginComponent {
    public email: string = "";
    public password: string = "";
    public rememberMe: boolean = false;
    public isLoading: boolean = false;


    public signIn = async () => {
        this.isLoading = true;
    }
}