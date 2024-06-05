import { NgModule } from "@angular/core";
import { SharedModule } from "../../../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SignupComponent } from "./signup.component";
import { RouterLink } from "@angular/router";

@NgModule({
    declarations: [SignupComponent],
    imports: [SharedModule, CommonModule, FormsModule, RouterLink],
    exports: []
})
export class SignUpModule {};