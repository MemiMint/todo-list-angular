import { ILogin } from "./login.type";

export class Login implements ILogin {
    private _email: string = "";
    private _password: string = "";
    private _rememberMe: boolean = false;
    private _loading: boolean = false;

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    get rememberMe(): boolean {
        return this._rememberMe;
    }

    get loading(): boolean {
        return this._loading;
    }

    set email($email: string) {
        this._email = $email;
    }

    set password($password: string) {
        this._password = $password;
    }

    set rememberMe($remember: boolean) {
        this._rememberMe = $remember;
    }

    set loading($loading: boolean) {
        this._loading = $loading;
    }
}