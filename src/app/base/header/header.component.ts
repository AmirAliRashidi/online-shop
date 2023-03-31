import { ICategoriesHeader } from './../base-interface';
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
  categories: ICategoriesHeader[] = [];
  items: string[] = [];

  constructor(
    private _httpClient: HttpClient,
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    const data = await this._httpClient.get("assets/JSON/categories.json").toPromise();
    (this.categories as any) = data;
    if (this.categories[0]?.items?.length > 0) this.getCategoryItems(this.categories[0])
    this.isLoading = false;
  }

  toggleNotificationList(bool: boolean) {
    this.showNotifications = bool;
  }

  getCategoryItems(category: ICategoriesHeader) {
    this.items = category.items;
    for (let cat of this.categories) {
      if (cat === category) {
        cat.active = true;
      } else {
        cat.active = false;
      }
    }
  }
}
