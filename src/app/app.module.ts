import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesComponent } from './models/dishes/dishes.component';
import { DrinksComponent } from './models/drinks/drinks.component';
import { NavbarComponent } from './models/navbar/navbar.component';
import { HeaderComponent } from './models/header/header.component';
import { FooterComponent } from './models/footer/footer.component';
import { HomeComponent } from './models/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DrinksComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
