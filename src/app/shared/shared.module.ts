import { NgModule } from "@angular/core";
import { LoaderComponent } from "./components/loader/loader.component";
import { CustomButtonComponent } from "./components/custom-button/custom-button.component";
import { FormControl, FormsModule } from "@angular/forms";
import { CustomInputComponent } from "./components/custom-input/custom-input.component";

@NgModule({
    declarations: [LoaderComponent, CustomButtonComponent, CustomInputComponent],
    imports: [FormsModule],
    exports: [LoaderComponent, CustomButtonComponent, CustomInputComponent]
})
export class SharedModule {};