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
  text: string;
}
