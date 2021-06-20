import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormItem, Page } from '../forms.entities';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageDetailComponent implements OnInit {
  @Input() page: Page | null = null;
  @Input() itemList: FormItem[] | null = null;
  pageItems: FormItem[] | null = null;

  constructor() { }

  ngOnInit(): void {
    this.pageItems = this.itemList!.filter(y => y.pageId === this.page!.pageId);
  }

}
