import { OnlineShopDictionary } from 'src/app/dictionary';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  dict = OnlineShopDictionary;
  isActive: boolean = false;
  loginForm: FormGroup;
  signUpForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private _router: Router,
    private _formBuildeer: FormBuilder,
  ) {
    this.loginForm = this._formBuildeer.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.signUpForm = this._formBuildeer.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      tel: ['', Validators.required],
    })
  }

  ngOnInit() { }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  signupFunc() {
    // import sign up function here
    this.gotoHome();
  }

  loginFunc() {
    // import login function here
    this.gotoHome();
  }

  changeStatus() {
    console.log('hi')
    this.showPassword = false;
    this.isActive = !this.isActive;
    console.log('by')
  }

  gotoHome() {
    this._router.navigateByUrl('/')
  }
}