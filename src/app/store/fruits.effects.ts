import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { loadFruits, loadFruitsSuccess, loadFruitsFailure } from "./fruits.actions";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from "../services/data.service";

@Injectable()

export class FruitsEffects {
  constructor(private actionsObs: Actions, private dataService: DataService) { }

  loadFruitsObj = createEffect(() => {
    return this.actionsObs.pipe(
      ofType(loadFruits),
      mergeMap(() => {
        return this.dataService.getFruits().pipe(
          map((fruits) => loadFruitsSuccess({ fruits })),
          catchError((error) => of(loadFruitsFailure({ error})))
        )
      })
    )
  })
}

