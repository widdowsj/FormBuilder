import { createReducer, on } from '@ngrx/store';
import { FormMetaData } from '../forms.entities';
import { getFormsSuccess, setSelectedForm } from './forms.actions';

export interface FormsState {
  forms: FormMetaData[];
  selectedFormId: string;
}

export const initialState: FormsState = {
  forms: [],
  selectedFormId: '',
};

export const formsReducer = createReducer(
  initialState,
  on(getFormsSuccess, (state, { forms }) => {
    return { ...state, forms };
  }),
  on(setSelectedForm, (state, { selectedFormId }) => {
    return { ...state, selectedFormId };
  })
);
