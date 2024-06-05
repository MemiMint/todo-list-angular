import { IForgotPassword } from "./forgot-password.type";

export class ForgotPassword implements IForgotPassword {
    private _email: string = "";
    private _loading: boolean = false;

    get email(): string {
        return this._email;
    }

    get loading(): boolean {
        return this._loading;
    }

    set email($email: string) {
        this._email = $email;
    }

    set loading($loading: boolean) {
        this._loading = $loading;
    }
}