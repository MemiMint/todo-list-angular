import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { SharedModule } from "../../../shared/shared.module";
import { CustomInputComponent } from "../../../shared/components/custom-input/custom-input.component";
import { RouterLink } from "@angular/router";

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, FormsModule, SharedModule, RouterLink],
    exports: []
})
export class LoginModule {};