import { Component, Input  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-loader',
    template: '<div *ngIf="isLoading" class="loader sc-center"></div>',
    styleUrls: ['appLoader.css']
})
export class AppLoaderComponent {
    @Input() isLoading: boolean;
}
