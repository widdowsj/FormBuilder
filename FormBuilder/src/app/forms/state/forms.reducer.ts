import { createReducer, on } from '@ngrx/store';
import { FormDetail, FormMetaData } from '../forms.entities';
import { deleteItem, getFormDetailSuccess, getFormsSuccess, setSelectedForm } from './forms.actions';

export interface FormsState {
  forms: FormMetaData[];
  selectedFormId: string;
  currentForm: FormDetail | undefined;
}

export const initialState: FormsState = {
  forms: [],
  selectedFormId: '',
  currentForm: undefined,
};

export const formsReducer = createReducer(
  initialState,
  on(getFormsSuccess, (state, { forms }) => {
    return { ...state, forms };
  }),
  on(setSelectedForm, (state, { selectedFormId }) => {
    return { ...state, selectedFormId, currentForm: undefined };
  }),
  on(getFormDetailSuccess, (state, { form }) => {
    return { ...state, currentForm: form };
  }),
  on(deleteItem, (state, { itemId }) => {
    console.log('deleting item...');
    const currentForm = state.currentForm;
    if (currentForm === undefined) { return { ...state }; }
    return {
      ...state,
      currentForm: {
        ...currentForm,
        itemList: currentForm.itemList.filter(x => x.itemId !== itemId),
      }
    };
  }),
);
