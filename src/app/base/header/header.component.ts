import { Component, OnInit } from '@angular/core';
import { OnlineShopDictionary } from 'src/app/dictionary';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dict = OnlineShopDictionary;
  constructor() { }

  ngOnInit(): void {
  }

}
