import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormItem, Page } from '../forms.entities';
import { deleteItem } from '../state/forms.actions';
import { FormsFeature } from '../state/forms.selectors';

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

  constructor(private store: Store<FormsFeature>) { }

  ngOnInit(): void {
    this.pageItems = this.itemList!.filter(y => y.pageId === this.page!.pageId);
  }

  itemDeleted(item: FormItem): void {
    console.log(`Delete clicked ${item.itemId}`);
    this.store.dispatch(deleteItem({ itemId: item.itemId }));
  }
}
