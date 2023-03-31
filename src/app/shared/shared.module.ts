import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbToastrModule, NbButtonModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
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
  ],
  providers: [],
})
export class SharedModule { }
