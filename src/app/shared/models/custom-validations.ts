export class ITypeValidation {
    constructor(
      // validation + error message
      public required = 'Field is required',
      public minlength = 'Must be greater than two characters',
      public email = 'Invalid email',
      public pattern = 'Password must have more than 6 characters of uppercase, lowercase and numbers',
    ) {}
  }
  export class IFields {
    constructor(
    // fields
      public name = '',
      public email = '',
      public password = '',
    ) {}
  }