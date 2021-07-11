import { createAction, props } from '@ngrx/store';
import { FormDetail, FormMetaData } from '../forms.entities';

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

export const deleteItem = createAction(
  '[Form State] Delete an item from the current form',
  props<{ itemId: string }>()
);
