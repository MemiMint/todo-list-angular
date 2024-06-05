export class SignUp {
    private _loading: boolean = false;
    private _name: string = "";
    private _lastname: string = "";
    private _email: string = "";
    private _password: string = "";
    private _confirmPassword: string = "";

    get loading(): boolean {
        return this._loading;
    }

    get name(): string {
        return this._name;
    }

    get lastname(): string {
        return this._lastname;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    get confirmPassword(): string {
        return this._confirmPassword;
    }

    set loading($isLoading: boolean) {
        this._loading = $isLoading;
    }

    set name($name: string) {
        this._name = $name;
    }

    set lastname($password: string) {
        this._lastname = $password;
    }

    set email($email: string) {
        this._email = $email;
    }

    set password($password: string) {
        this._password = $password;
    }

    set confirmPassword($confirmPassword: string) {
        this._confirmPassword = $confirmPassword;
    }
}