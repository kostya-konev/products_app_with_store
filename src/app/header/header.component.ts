import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.state";
import { selectCart, selectCartQuantity } from "../store/cart.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart: any[] = [];
  cartQuantity: any;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectCart).subscribe(res => {
      this.cart = res.cart;
    })
    this.cartQuantity = this.store.select(selectCartQuantity);
  }

  goToFruits() {
    this.router.navigate(['fruits']);
  }

  goToVegetables() {
    this.router.navigate(['vegetables']);
  }

}
