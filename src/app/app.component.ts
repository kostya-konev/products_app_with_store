import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {loadFruits} from "./store/fruits.actions";
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private DataService: DataService, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadFruits());
  }
}
