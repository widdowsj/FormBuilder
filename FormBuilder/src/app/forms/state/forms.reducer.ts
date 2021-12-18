import { createReducer, on } from '@ngrx/store';
import { Answer, FormItem, FormMetaData, Page } from '../forms.entities';
import { deleteItem, getFormDetailSuccess, getFormsSuccess, recordAnswer, saveItem, setSelectedForm } from './forms.actions';

export interface ItemDisplayState {
  itemId: string;
  isDisplayed: boolean;
}

export interface FormsState {
  forms: FormMetaData[];
  selectedFormId: string;
  currentFormName: string;
  currentFormPages: Page[];
  currentFormItems: FormItem[];
  itemDisplayState: ItemDisplayState[];
  editMode: boolean;
  answerSet: Answer[];
}

export const initialState: FormsState = {
  forms: [],
  selectedFormId: '',
  currentFormName: '',
  currentFormPages: [],
  currentFormItems: [],
  itemDisplayState: [],
  editMode: true,
  answerSet: [],
};

export const formsReducer = createReducer(
  initialState,
  on(getFormsSuccess, (state, { forms }) => {
    return { ...state, forms };
  }),
  on(setSelectedForm, (state, { selectedFormId }) => {
    return { ...state, selectedFormId, currentFormName: '', currentFormPages: [], currentFormItems: [] };
  }),
  on(getFormDetailSuccess, (state, { form }) => {
    return {
      ...state,
      currentFormName: form.name,
      currentFormPages: form.pageList,
      currentFormItems: form.itemList,
      itemDisplayState: getItemDisplayState(form.itemList, state.answerSet),
    };
  }),
  on(saveItem, (state, { itemId, item }) => {
    return {
      ...state,
      currentFormItems: [...state.currentFormItems.filter(x => x.itemId !== itemId), item],
    };
  }),
  on(deleteItem, (state, { itemId }) => {
    return {
      ...state,
      currentFormItems: state.currentFormItems.filter(x => x.itemId !== itemId),
    };
  }),
  on(recordAnswer, (state, { itemId, value }) => {
    console.log(`recordAnswer: ${itemId}, ${value}`);
    const answerSet = [...state.answerSet.filter(x => x.itemId !== itemId), { itemId: itemId ?? '', answer: value ?? '' }];
    return {
      ...state,
      answerSet,
      itemDisplayState: getItemDisplayState(state.currentFormItems, answerSet),
    };
  }),
);

function getItemDisplayState(itemList: FormItem[], answerSet: Answer[]): ItemDisplayState[] {
  return itemList.map(x => {
    let isDisplayed = true;
    if (x.relatedFormItemId !== undefined) {
      const answer = x.relatedFormItemId === null ? undefined : answerSet.find(a => a.itemId === x.relatedFormItemId)?.answer;
      if (Array.isArray(answer)) {
        isDisplayed = answer.some(a => a === x.relatedConditionalValue);
      } else {
        isDisplayed = x.relatedConditionalValue === answer?.toString();
      }
    }
    return {
      itemId: x.itemId,
      isDisplayed
    };
  });
}
