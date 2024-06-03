export type InputType = "text" | "password" | "email";

export type ICustomInput = {
    type: InputType,
    placeholder: string;
    isDisabled: boolean;
}