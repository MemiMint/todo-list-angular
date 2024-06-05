import { NgModule } from "@angular/core";
import { ForgotPasswordComponent } from "./forgot-password.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ForgotPasswordComponent],
    imports: [CommonModule, FormsModule, SharedModule],
    exports: [ForgotPasswordComponent]
})
export class ForgotPasswordModule {};