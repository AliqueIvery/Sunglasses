import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunglassesListComponent } from './sunglasses-list/sunglasses-list.component';
import { EarringListComponent } from './earring-list/earring-list.component';
import { MaskListComponent } from './mask-list/mask-list.component';
import {HttpClientModule} from '@angular/common/http';
import { MaskDetailComponent } from './mask-detail/mask-detail.component';
import { EarringDetailComponent } from './earring-detail/earring-detail.component';
import { SunglassesDetailComponent } from './sunglasses-detail/sunglasses-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SunglassesListComponent,
    EarringListComponent,
    MaskListComponent,
    MaskDetailComponent,
    EarringDetailComponent,
    SunglassesDetailComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
