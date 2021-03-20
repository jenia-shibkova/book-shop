import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksPageModule } from './books-page/books-page.module';
import { CartModule } from './cart/cart.module';
import { CartService } from './shared/services/cart.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, BooksPageModule, CartModule],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
