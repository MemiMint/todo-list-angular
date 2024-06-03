import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { SharedModule } from "../../../shared/shared.module";
import { CustomInputComponent } from "../../../shared/components/custom-input/custom-input.component";

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, FormsModule, SharedModule],
    exports: []
})
export class LoginModule {};