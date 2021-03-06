import { ControlOption } from '../controls/controls.entities';

export interface FormMetaData {
  id: number;
  name: string;
  version: number;
  isPublished: boolean;
  type: string;
}

export interface FormDetail {
  name: string;
  pageList: Page[];
  itemList: FormItem[];
}

export interface Page {
  pageId: string;
  order: number;
  text: string;
}

export interface FormItem {
  itemId: string;
  pageId: string;
  description: string;
  text: string;
  questionType: ItemType;
  isFormField: boolean;
  options: FormOption[];
  fields: FormField[];
  order: number;
  relatedFormItemId?: string;
  relatedConditionalValue?: string;
}

export interface FormOption extends ControlOption {
}

export interface FormField {
  text: string;
  type: string;
  order: number;
}

export enum ItemType {
  text = 'Text',
  multilineText = 'MultilineText',
  richText = 'RichText',
  info = 'Info',
  date = 'Date',
  time = 'Time',
  dropdown = 'Dropdown',
  radioButtons = 'RadioButtons',
  multiselect = 'Multiselect',
  numeric = 'Numeric',
  numberRange = 'Number Range',
  inputTable = 'Input Table',
}

export const formFields = [ItemType.text, ItemType.numeric, ItemType.multilineText, ItemType.richText, ItemType.date, ItemType.dropdown];

export enum FieldType {
  text = 'Text',
  multilineText = 'Multiline Text',
  number = 'Number',
  currency = 'Currency',
  date = 'Date',
  time = 'Time',
}

export const initialItem: FormItem = {
  itemId: '',
  pageId: '',
  description: '',
  text: '',
  questionType: ItemType.text,
  isFormField: true,
  options: [],
  fields: [],
  order: 0,
};

export interface Answer {
  itemId: string;
  answer: string;
}
