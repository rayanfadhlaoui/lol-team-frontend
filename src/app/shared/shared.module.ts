import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoaderComponent } from './components/loader/loader.component';
import { AppActiveDirective } from './directives/activate/appActivate.directive';
import { ButtonLoaderComponent } from './components/loader/button-loader/button-loader.component';

@NgModule({
  imports: [
    CommonModule, BrowserModule
  ],
  declarations: [
    LoaderComponent,
    AppActiveDirective,
    ButtonLoaderComponent
  ],
  exports: [
    LoaderComponent,
    AppActiveDirective,
    ButtonLoaderComponent
  ]
})
export class SharedModule {
}
