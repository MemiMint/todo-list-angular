import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CustomInput, CUSTOM_INPUT_CONTROL_VALUE_ACCESOR } from './custom.input';
import { ICustomInput, InputType } from "./custom-input.type";

@Component({
    selector: 'custom-input',
    templateUrl: "./custom-input.component.html",
    styleUrl: "./custom-input.component.css",
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESOR]
})
export class CustomInputComponent extends CustomInput implements ICustomInput {
    private inputPlaceholder: string = "";
    private inputType: InputType = "text";
    private isInputDisabled: boolean = false;

    get placeholder(): string {
        return this.inputPlaceholder;
    }

    get type(): InputType {
        return this.inputType;
    }

    get disabled(): boolean {
        return this.isInputDisabled;
    }

    @Input("placeholder")
    set placeholder(text: string) {
        this.inputPlaceholder = text;
    }

    @Input("type")
    set type(inputType: InputType) {
        this.inputType = inputType;
    }

    @Input("disabled")
    set isDisabled(disabled: boolean) {
        this.isInputDisabled = disabled;
    }
}
