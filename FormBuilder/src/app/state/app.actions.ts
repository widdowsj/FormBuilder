import { createAction, props } from '@ngrx/store';

export const setError = createAction(
  '[App State] Set Error',
  props<{ error: string }>()
);
