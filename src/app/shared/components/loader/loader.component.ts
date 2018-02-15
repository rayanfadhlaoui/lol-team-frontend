import { Component, Input  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'loader',
    template: '<div *ngIf="isLoading" class="loader"></div>',
    styleUrls: ['loader.css']
})
export class LoaderComponent {
    @Input() isLoading: boolean;
}
