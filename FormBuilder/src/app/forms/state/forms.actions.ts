import { createAction, props } from '@ngrx/store';
import { FormMetaData } from '../forms.entities';

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
