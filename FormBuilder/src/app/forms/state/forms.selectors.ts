import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { FormsState } from './forms.reducer';

export interface FormsFeature extends AppState {
  formsState: FormsState;
}

export const formsStateKey = 'formsState';
export const selectFormsState = createFeatureSelector<FormsState>(formsStateKey);

export const getFormList = createSelector(
  selectFormsState,
  state => state.forms
);

export const getCurrentFormName = createSelector(
  selectFormsState,
  state => state.currentFormName
);

export const getCurrentFormItems = createSelector(
  selectFormsState,
  state => state.currentFormItems,
);

export const getPageList = createSelector(
  selectFormsState,
  // filter to create a copy of the array
  state => state.currentFormPages.filter(_ => true).sort((a, b) => a.order - b.order),
);

export const getPageItems = (props: { pageId: string }) => createSelector(
  getCurrentFormItems,
  formItems => formItems.filter(x => x.pageId === props.pageId).sort((a, b) => a.order - b.order).map(x => x.itemId),
);

export const getItem = (props: { itemId: string }) => createSelector(
  getCurrentFormItems,
  formItems => formItems.find(x => x.itemId === props.itemId),
);

export const getItemDisplayState = (props: { itemId: string }) => createSelector(
  selectFormsState,
  state => state.itemDisplayState.find(x => x.itemId === props.itemId)?.isDisplayed ?? true,
);

export const getEditMode = createSelector(
  selectFormsState,
  state => state.editMode
);
