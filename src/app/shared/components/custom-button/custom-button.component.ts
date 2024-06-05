import { Component, Input, Output } from "@angular/core";
import { noop } from "rxjs";
import { ICustomButton } from "./custom-button.type";

@Component({
    selector: "custom-btn",
    templateUrl: "./custom-button.component.html",
    styleUrl: "./custom-button.component.css"
})
export class CustomButtonComponent implements ICustomButton {
    private _text: string = "";
    private _onclick: VoidFunction = noop;

    get text(): string {
        return this._text
    }

    get onClick(): VoidFunction {
        return this._onclick;
    }

    @Input("text")
    set text($text: string) {
        this._text = $text;
    }

    @Input("onClick")
    set onClick($onclick: VoidFunction) {
        this._onclick = $onclick;
    }
}