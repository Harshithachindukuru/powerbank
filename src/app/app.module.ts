import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CustomerViewComponent,
    BuyComponent,
    SellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
