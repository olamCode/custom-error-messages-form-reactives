# Custom Messages Error for Form Reactives Angular

Alternative option to generate validation messages in reactive forms, reducing logical code in the template (HTML)

![form](https://user-images.githubusercontent.com/81374082/170858622-1f3fa4d6-6bc3-40a2-adac-6f9eeac39615.gif)

**HTML**
```
 <input formControlName="name" type="text" placeholder="Name" />
    <span class="error-form" *ngIf="fieldValidation('name')">
        {{errorMsg.name}}
    </span>
```
**TS**
```
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
```
