import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbToastrModule, NbButtonModule, NbFormFieldModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from '../base/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    NbFormFieldModule,
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
    LoaderComponent,
    FormsModule,
    ReactiveFormsModule,
    NbFormFieldModule,
  ],
  providers: [],
})
export class SharedModule { }
