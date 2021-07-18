import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormItem } from '../forms.entities';
import { deleteItem } from '../state/forms.actions';
import { FormsFeature } from '../state/forms.selectors';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageDetailComponent implements OnInit {
  @Input() pageItems: FormItem[] | undefined;

  constructor(private store: Store<FormsFeature>) { }

  ngOnInit(): void {
  }

  itemDeleted(item: FormItem): void {
    console.log(`Delete clicked ${item.itemId}`);
    this.store.dispatch(deleteItem({ itemId: item.itemId }));
  }
}
