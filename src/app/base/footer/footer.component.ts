import { Component, OnInit } from '@angular/core';
import { OnlineShopDictionary } from 'src/app/dictionary';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  dict = OnlineShopDictionary;
  
  constructor() { }

  ngOnInit(): void {
  }

}
