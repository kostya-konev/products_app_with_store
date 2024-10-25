import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FruitsComponent } from './fruits/fruits.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { StoreModule } from '@ngrx/store';
import {cartReducer} from "./store/cart.reducers";
import { SpinnerComponent } from './spinner/spinner.component';
import { EffectsModule } from '@ngrx/effects';
import {fruitsReducer} from "./store/fruits.reducers";
import {FruitsEffects} from "./store/fruits.effects";

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    FruitsComponent,
    HeaderComponent,
    ItemComponent,
    VegetablesComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cart: cartReducer, fruits: fruitsReducer}),
    EffectsModule.forRoot([FruitsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
