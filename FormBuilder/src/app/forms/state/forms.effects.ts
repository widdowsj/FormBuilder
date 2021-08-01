import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { setError } from 'src/app/state/app.actions';
import { v4 as uuidv4 } from 'uuid';
import { initialItem } from '../forms.entities';
import { FormsService } from '../forms.service';
import { addItem, editItem, getFormDetailSuccess, getForms, getFormsSuccess, setSelectedForm } from './forms.actions';
import { FormsFeature, getItem } from './forms.selectors';

@Injectable()
export class FormsEffects {

  constructor(
    private actions$: Actions,
    private store: Store<FormsFeature>,
    private formsService: FormsService,
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
      tap(x => this.formsService.showItemDialog({ ...initialItem, itemId: uuidv4(), pageId: x.pageId, order: x.order })),
    ),
    { dispatch: false }
  );

  editItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editItem),
      concatLatestFrom(x => this.store.select(getItem({ itemId: x.itemId }))),
      tap(([action, x]) => this.formsService.showItemDialog(x)),
    ),
    { dispatch: false }
  );
}
