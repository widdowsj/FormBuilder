export interface FormMetaData {
  id: number;
  name: string;
  version: number;
  isPublished: boolean;
  type: string;
}

export interface FormDetail {
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
}

export enum ItemType {
  text = 'Text',
  multilineText = 'MultilineText',
  richText = 'RichText',
  info = 'Info',
  date = 'Date',
  dropdown = 'Dropdown',
  radioButtons = 'RadioButtons',
}

export const formFields = [ItemType.text, ItemType.multilineText, ItemType.date];
