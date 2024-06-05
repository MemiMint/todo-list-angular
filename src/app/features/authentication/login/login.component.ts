import { Component } from "@angular/core";
import { Login } from "./login";

@Component({
    selector: "auth-login",
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.css",
})
export class LoginComponent extends Login {
    public signIn = async () => {
        this.loading = true;
    }
}