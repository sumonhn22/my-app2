
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import {FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    List1Component,
    List2Component,
    ProductAlertsComponent
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
