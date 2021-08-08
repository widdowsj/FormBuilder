import { createAction, props } from '@ngrx/store';
import { FormDetail, FormItem, FormMetaData } from '../forms.entities';

export const getForms = createAction(
  '[Form State] Get list of Forms',
);

export const getFormsSuccess = createAction(
  '[Form State] Get list of Forms Success',
  props<{ forms: FormMetaData[] }>()
);

export const setSelectedForm = createAction(
  '[Form State] Set Selected Form',
  props<{ selectedFormId: string }>()
);

export const getFormDetailSuccess = createAction(
  '[Form State] Get Selected Form Success',
  props<{ form: FormDetail }>()
);

export const addItem = createAction(
  '[Form State] Add an item',
  props<{ pageId: string, order: number }>()
);

export const editItem = createAction(
  '[Form State] Edit an item\'s properties',
  props<{ itemId: string }>()
);

export const deleteItem = createAction(
  '[Form State] Delete an item from the current form',
  props<{ itemId: string | undefined }>()
);

export const saveItem = createAction(
  '[Form State] Save an item in the current form',
  props<{ itemId: string, item: FormItem }>()
);
