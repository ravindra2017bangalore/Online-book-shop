import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';
import { BookDetailsComponent } from './shop/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'book-shop', component: ShopComponent},
      {path : 'book-details',component: BookDetailsComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
