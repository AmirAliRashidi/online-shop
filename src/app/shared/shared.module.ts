import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbToastrModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbCardModule,
    NbToastrModule,
    NbLayoutModule,
  ],
  exports: [
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
