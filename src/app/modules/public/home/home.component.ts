import { OnlineShopDictionary } from 'src/app/dictionary';
import { IItems } from './../../../base/base-interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ICategories } from 'src/app/base/base-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dynamicSlides = [
    {
      id: 1,
      src: 'assets/image/slide-1.jpg',
      alt: 'Side 1',
      title: 'Side 1'
    },
    {
      id: 2,
      src: 'assets/image/slide-2.jpg',
      alt: 'Side 2',
      title: 'Side 2'
    },
    {
      id: 3,
      src: 'assets/image/slide-3.jpg',
      alt: 'Side 3',
      title: 'Side 3'
    },
    {
      id: 4,
      src: 'assets/image/slide-4.jpg',
      alt: 'Side 4',
      title: 'Side 4'
    },
    {
      id: 5,
      src: 'assets/image/slide-5.jpg',
      alt: 'Side 5',
      title: 'Side 5'
    },
    {
      id: 6,
      src: 'assets/image/slide-6.jpg',
      alt: 'Side 5',
      title: 'Side 5'
    }
  ]

  mainOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 100,
    navText: ['&#8249', '&#8250;'],
    items: 1,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   760: {
    //     items: 3
    //   },
    //   1000: {
    //     items: 1
    //   }
    // },
    nav: false
  }

  itemsOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 200,
    navText: ['&#8249', '&#8250;'],
    items: 6,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      760: {
        items: 4
      },
      1000: {
        items: 5
      }
    },
    nav: true
  }

  isLoading: boolean = true;
  categories: ICategories[] = [];
  items: IItems[] = [];

  dict = OnlineShopDictionary;

  constructor(
    private _httpClient: HttpClient,
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    (this.categories as any) = await this._httpClient.get("assets/JSON/categories.json").toPromise();
    (this.items as any) = await this._httpClient.get("assets/JSON/fake-items.json").toPromise();
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }
}
