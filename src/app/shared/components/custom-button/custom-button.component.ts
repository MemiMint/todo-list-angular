import { Component, Input, Output } from "@angular/core";
import { noop } from "rxjs";

@Component({
    selector: "custom-btn",
    templateUrl: "./custom-button.component.html",
    styleUrl: "./custom-button.component.css"
})
export class CustomButtonComponent {
    private btnText: string = "";
    private btnClick: VoidFunction = noop;

    get text(): string {
       return this.btnText;
    }

    get onClick(): VoidFunction {
        return this.btnClick;
    }

    @Input("text")
    set text(text: string) {
        this.btnText = text;
    }

    @Input("onClick") 
    set onClick(fn: VoidFunction) {
        this.btnClick = fn;
    }
}