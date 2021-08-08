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
  (state) => state.forms
);

export const getCurrentForm = createSelector(
  selectFormsState,
  (state) => state.currentForm
);

export const getCurrentFormItems = createSelector(
  getCurrentForm,
  (state) => state?.itemList,
);

export const getPageItems = (props: { pageId: string | undefined }) => createSelector(
  getCurrentFormItems,
  (formItems) => formItems?.filter(x => x.pageId === props.pageId).sort((a, b) => a.order - b.order),
);

export const getItem = (props: { itemId: string | undefined }) => createSelector(
  getCurrentFormItems,
  (formItems) => formItems?.find(x => x.itemId === props.itemId),
);

export const getEditMode = createSelector(
  selectFormsState,
  (state) => state.editMode
);
