import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signUpForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
      // updateOn: 'blur',
    }),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    // todo: add event emitter to create state for user's first name
  }

  onChange() {
    console.log(this.signUpForm);
  }

  get firstNameField() {
    return this.signUpForm.get('firstName');
  }

  get emailField() {
    return this.signUpForm.get('email');
  }

  get passwordField() {
    return this.signUpForm.get('password');
  }

  get firstNameFieldErrorMessage(): string {
    if (
      this.firstNameField?.hasError('required') &&
      this.firstNameField.touched
    ) {
      return 'Password is required.';
    }
    return '';
  }

  get passwordFieldErrorMessage(): string {
    if (
      this.passwordField?.hasError('minlength') &&
      this.passwordField.touched
    ) {
      return 'Password must be at least 8 characters in length.';
    }
    if (
      this.passwordField?.hasError('required') &&
      this.passwordField.touched
    ) {
      return 'Password is required.';
    }
    return '';
  }

  get emailFieldErrorMessage(): string {
    if (this.emailField?.hasError('email') && this.emailField.touched) {
      return 'Must be a valid email address.';
    }
    if (this.emailField?.hasError('required') && this.emailField.touched) {
      return 'Email address is required.';
    }
    return '';
  }
}
