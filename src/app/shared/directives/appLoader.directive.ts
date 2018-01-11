import {Component, Input, Directive, ElementRef, Renderer2} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Directive({selector: '[appLoader]'})
export class AppLoaderDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.addClass(el.nativeElement, 'loader');
  }
}
