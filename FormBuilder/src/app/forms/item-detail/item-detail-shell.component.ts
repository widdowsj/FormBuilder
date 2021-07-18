import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormItem } from '../forms.entities';
import { deleteItem, editItem } from '../state/forms.actions';
import { FormsFeature, getItem } from '../state/forms.selectors';

@Component({
  selector: 'app-item-detail-shell',
  templateUrl: './item-detail-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailShellComponent implements OnInit {
  @Input() itemId: string | undefined;
  item$: Observable<FormItem | undefined> | undefined;

  constructor(private store: Store<FormsFeature>) {
  }

  ngOnInit(): void {
    this.item$ = this.store.select(getItem({ itemId: this.itemId }));
  }

  itemEdited(): void {
    this.store.dispatch(editItem({ itemId: this.itemId }));
  }

  itemDeleted(): void {
    this.store.dispatch(deleteItem({ itemId: this.itemId }));
  }
}
