import { OnlineShopDictionary } from 'src/app/dictionary';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  dict = OnlineShopDictionary;
  isActive: boolean = false;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() { }

  changeStatus() {
    this.isActive = !this.isActive;
  }

  gotoHome() {
    this._router.navigateByUrl('/')
  }
}