
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
  pageId: string;
  description: string;
  text: string;
  questionType: ItemType;
  isFormField: boolean;
  options: FormOption[];
  fields: FormField[];
}

export interface FormOption {
  value: string;
  text: string;
  order: number;
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

export const formFields = [ItemType.text, ItemType.numeric, ItemType.multilineText, ItemType.date, ItemType.dropdown];

export enum FieldType {
  text = 'Text',
}
