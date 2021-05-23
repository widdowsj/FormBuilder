import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { setError } from 'src/app/state/app.actions';
import { FormsService } from '../forms.service';
import { getForms, getFormsSuccess } from './forms.actions';

@Injectable()
export class FormsEffects {

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

  constructor(
    private actions$: Actions,
    private formsService: FormsService
  ) { }
}
