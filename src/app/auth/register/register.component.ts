import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IFields,
  ITypeValidation,
} from 'src/app/shared/models/custom-validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  typeValidations = new ITypeValidation();
  errorMsg = new IFields();
  formRegister!: FormGroup;
  passwordRegExp: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.formRegister = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(this.passwordRegExp)],
      ],
    });
  }
  fieldValidation(field: string): boolean | undefined {
    const errors = this.formRegister.get(field)?.errors;
    if (!errors) {
      return;
    }
    if (this.formRegister.controls[field].touched) {
      Object.keys(this.typeValidations).map((validation) => {
        if (errors[validation]) {
          const message =
            this.typeValidations[validation as keyof ITypeValidation];
          for (let valid in this.errorMsg) {
            if (this.errorMsg.hasOwnProperty(field)) {
              this.errorMsg[field as keyof IFields] = message;
            }
          }
        }
      });
      return true;
    }
    return false;
  }
  register(): void {
    if (this.formRegister.invalid) {
      this.formRegister.markAllAsTouched();
      return;
    }
  }
}
//sdsfd