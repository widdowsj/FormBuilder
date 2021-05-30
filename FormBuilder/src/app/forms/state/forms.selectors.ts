import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { FormsState } from './forms.reducer';

export interface FormsFeature extends AppState {
  formsState: FormsState;
}

export const formsStateKey = 'formsState';
export const selectFormsState = createFeatureSelector<FormsFeature, FormsState>(formsStateKey);

export const getFormList = createSelector(
  selectFormsState,
  (state: FormsState) => state.forms
);

export const getCurrentForm = createSelector(
  selectFormsState,
  (state: FormsState) => state.currentForm
);
