import { Component, Input, OnInit } from '@angular/core';
import { FormItem, ItemType, Page } from '../forms.entities';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit {
  @Input() page: Page | null = null;
  @Input() itemList: FormItem[] | null = null;
  pageItems: FormItem[] | null = null;
  ItemType = ItemType;

  constructor() { }

  ngOnInit(): void {
    this.pageItems = this.itemList!.filter(y => y.pageId === this.page!.pageId);
  }

}
