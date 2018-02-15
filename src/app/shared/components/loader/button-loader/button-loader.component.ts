import { Component, Input  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'button-loader',
    templateUrl: 'button-loader.html',
    styleUrls: ['button-loader.css']
})
export class ButtonLoaderComponent {
    @Input() isLoading: boolean;
}
