import { CodeInputComponentConfig, CodeInputComponentConfigToken } from './code-separator/code-separator.component.config';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbToastrModule, NbButtonModule, NbFormFieldModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from '../base/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeSeparatorComponent } from './code-separator/code-separator.component';

@NgModule({
  declarations: [
    CodeSeparatorComponent,
    LoaderComponent,
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
    CodeSeparatorComponent,
  ],
  providers: [],
})
export class SharedModule {
  static forRoot(config: CodeInputComponentConfig): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: CodeInputComponentConfigToken, useValue: config }
      ]
    };
  }
}
