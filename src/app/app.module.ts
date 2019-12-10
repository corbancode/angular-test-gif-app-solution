import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifComponent } from './gif/gif.component';
import { FormsModule } from '@angular/forms';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { StoreModule } from './store/store.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShowOneGifAPIActions } from './gif/api/actions';

@NgModule({
  declarations: [
    AppComponent,
    GifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule,
  ],
  providers: [ShowOneGifAPIActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
