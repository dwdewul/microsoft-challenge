import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/services/sign-up.service';

const LOCAL_STORAGE_TIMEOUT_KEY = 'load_timeout_ms';
const TIMEOUT_DEFAULT = '1500';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signUpForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  public isLoading: boolean = false;

  constructor(private _router: Router, private _signUpService: SignUpService) {}

  ngOnInit(): void {
    // I decided to store the timeout in local storage in case anyone would like to override it
    if (!localStorage.getItem(LOCAL_STORAGE_TIMEOUT_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_TIMEOUT_KEY, TIMEOUT_DEFAULT);
    }
  }

  onSubmit() {
    this.isLoading = true;
    this._signUpService.userData = this.signUpForm.value;

    const timeout = parseInt(
      localStorage.getItem(LOCAL_STORAGE_TIMEOUT_KEY) || TIMEOUT_DEFAULT
    );

    // to mock an http request time
    setTimeout(() => {
      this.isLoading = false;
      this._router.navigateByUrl('/success');
    }, timeout);
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
      return 'First name is required.';
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
