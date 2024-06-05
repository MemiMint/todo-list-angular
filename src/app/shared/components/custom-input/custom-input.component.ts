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
    private _placeholder: string = "";
    private _type: InputType = "text";
    private _disabled: boolean = false;

    get placeholder(): string {
        return this._placeholder;
    }

    get type(): InputType {
        return this._type;
    }

    get disabled(): boolean {
        return this._disabled;
    }

    @Input("placeholder")
    set placeholder($placeholder: string) {
        this._placeholder = $placeholder;
    }

    @Input("type")
    set type($type: InputType) {
        this._type = $type;
    }

    @Input("disabled")
    set isDisabled($disabled: boolean) {
        this._disabled = $disabled;
    }
}
