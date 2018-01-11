import { LoginRoutingModule } from './login-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { LoginComponent } from './login.component';
import { NgModel, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpModule, LoginRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
