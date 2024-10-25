import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Store} from "@ngrx/store";
import {selectFruits} from "../store/fruits.selectors";
import {AppState} from "../store/app.state";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  fruits: any[] = [];

  constructor(private DataService: DataService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectFruits).subscribe((res) => {
      this.fruits = res.fruits;
    })
  }
}
