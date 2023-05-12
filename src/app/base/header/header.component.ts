import { Router } from '@angular/router';
import { ICategories } from './../base-interface';
import { Component, OnInit } from '@angular/core';
import { OnlineShopDictionary } from 'src/app/dictionary';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoading: boolean = true;
  showNotifications: boolean = false;
  dict = OnlineShopDictionary;
  categories: ICategories[] = [];
  items: string[] = [];

  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    (this.categories as any) = await this._httpClient.get("assets/JSON/categories.json").toPromise();
    if (this.categories[0]?.items?.length > 0) this.getCategoryItems(this.categories[0]);
    this.isLoading = false;
  }

  toggleNotificationList(bool: boolean) {
    this.showNotifications = bool;
  }

  getCategoryItems(category: ICategories) {
    this.items = category.items;
    for (let cat of this.categories) {
      if (cat === category) {
        cat.active = true;
      } else {
        cat.active = false;
      }
    }
  }
  signInUp(){
    this._router.navigateByUrl('/auth/sign-in-up')
  }
}
