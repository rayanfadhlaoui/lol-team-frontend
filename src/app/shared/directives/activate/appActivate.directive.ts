import {Component, Input, Directive, ElementRef, Renderer2, OnInit, HostListener} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { PathLocationStrategy, LocationStrategy, Location} from '@angular/common';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized } from '@angular/router';

@Directive({
  selector: '[appActive]'
})
export class AppActiveDirective implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('appActive') path: string;

  constructor(public el: ElementRef, public renderer: Renderer2, router: Router, private location: Location) {
    router.events
    .subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.activateElement();
      }
    });
  }


  ngOnInit(): void {
    this.activateElement();
  }

  activateElement() {
    if (this.path === this.location.path()) {
      this.renderer.addClass(this.el.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'active');
    }
  }
}
