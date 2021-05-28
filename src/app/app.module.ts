import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxsComponent } from './Components/boxs/boxs.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { MenubarComponent } from './Components/menubar/menubar.component';
import { AddressComponent } from './Components/contact/address/address.component';
import { ServiceitemComponent } from './Components/home/serviceitem/serviceitem.component';
import { DetailsComponent } from './Components/home/details/details.component';
import { FormComponent } from './Components/home/form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    BoxsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenubarComponent,
    AddressComponent,
    ServiceitemComponent,
    DetailsComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
