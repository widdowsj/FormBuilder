import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { setError } from 'src/app/state/app.actions';
import { FormsService } from '../forms.service';
import { addItem, addItemSuccess, editItem, getFormDetailSuccess, getForms, getFormsSuccess, setSelectedForm } from './forms.actions';

@Injectable()
export class FormsEffects {

  constructor(
    private actions$: Actions,
    private formsService: FormsService
  ) { }

  getForms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getForms),
      mergeMap(() => this.formsService.getForms()
        .pipe(
          map(forms => getFormsSuccess({ forms })),
          catchError((error) => of(setError({ error })))
        )
      )
    )
  );

  setSelectedForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setSelectedForm),
      mergeMap(x => this.formsService.getFormDetail(x.selectedFormId)
        .pipe(
          map(form => getFormDetailSuccess({ form })),
          catchError((error) => of(setError({ error })))
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItem),
      mergeMap(x => this.formsService.showItemDialog(null, x.order)
        .pipe(
          map(() => addItemSuccess()),
          catchError((error) => of(setError({ error })))
        )
      )
    )
  );

  editItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editItem),
      mergeMap(x => this.formsService.showItemDialog(x.itemId, null)
        .pipe(
          map(() => addItemSuccess()),
          catchError((error) => of(setError({ error })))
        )
      )
    )
  );
}
