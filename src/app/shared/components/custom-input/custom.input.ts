import { Provider, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { CustomInputComponent } from "./custom-input.component";
import { noop } from "rxjs";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESOR: Provider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
}

export class CustomInput implements ControlValueAccessor {
    private innerValue: string = "";

    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (fn: any) => void = noop; 

    get value(): string {
        return this.innerValue;
    }

    set value(value: string) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            this.onChangeCallback(value);
        }
    }

    public onBlur = () => {
        this.onTouchedCallback();
    }

    public writeValue(value: string): void {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    public registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }
}