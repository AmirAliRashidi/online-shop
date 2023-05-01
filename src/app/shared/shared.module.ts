import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbToastrModule, NbButtonModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from '../base/loader/loader.component';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbCardModule,
    NbToastrModule,
    NbLayoutModule,
  ],
  exports: [
    HttpClientModule,
    NbButtonModule,
    NbIconModule,
    NbIconModule,
    NbInputModule,
    NbCardModule,
    NbToastrModule,
    NbLayoutModule,
    LoaderComponent
  ],
  providers: [],
})
export class SharedModule { }
