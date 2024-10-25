import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CartService} from "../cart.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output() addItemToCart = new EventEmitter();
  @Output() removeItemFromCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addItemToCart.emit();
  }

  removeFromCart() {
    this.removeItemFromCart.emit();
  }

}
