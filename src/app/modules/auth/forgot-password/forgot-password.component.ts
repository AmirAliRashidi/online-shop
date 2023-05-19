import { OnlineShopDictionary } from './../../../dictionary';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  dict = OnlineShopDictionary;
  showVerifactionForm: boolean = false;

  constructor(
    private _router: Router,
    private _formBuildeer: FormBuilder,
  ) {
    this.forgotForm = this._formBuildeer.group({
      email: ['', Validators.required],
    });
  }

  ngOnInit() { }

  gotoHome() {
    this._router.navigateByUrl('/')
  }

  forgotFunc() {
    // add forgot password function here
    this.showVerifactionForm = true;
  }

  onCodeChanged(event: string) {
    // when one word entered
  }

  onCodeCompleted() {
    // add submit password here
    this.gotoHome();
  }

  gotoAuth() {
    this._router.navigateByUrl('/auth/sign-in-up')
  }
}
