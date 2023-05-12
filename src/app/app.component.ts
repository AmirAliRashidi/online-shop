import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'online-shop';

  constructor(
    public router: Router,
    private _iconLibraries: NbIconLibraries,
  ) {
    this._iconLibraries.registerFontPack('fontawesome', {
      ligature: true,
      packClass: 'fontawesome',
    });
  }

  async ngOnInit(): Promise<void> {

  }
}
