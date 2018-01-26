import {AppLoaderComponent} from './components/appLoader.component';
import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppActiveDirective } from './directives/appActivate.directive';

@NgModule({
  imports: [
    CommonModule, BrowserModule
  ],
  declarations: [
    AppLoaderComponent,
    AppActiveDirective
  ],
  exports: [
    AppLoaderComponent,
    AppActiveDirective
  ]
})
export class SharedModule {
}
