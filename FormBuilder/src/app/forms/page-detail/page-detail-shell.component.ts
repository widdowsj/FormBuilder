import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem } from '../state/forms.actions';
import { FormsFeature, getEditMode, getPageItems } from '../state/forms.selectors';

@Component({
  selector: 'app-page-detail-shell',
  templateUrl: './page-detail-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageDetailShellComponent implements OnInit {
  @Input() pageId: string | undefined;
  pageItems$: Observable<string[] | undefined> | undefined;
  editMode$: Observable<boolean> | undefined;

  constructor(private store: Store<FormsFeature>) {
  }

  ngOnInit(): void {
    this.pageItems$ = this.store.select(getPageItems({ pageId: this.pageId }));
    this.pageItems$.subscribe(x => console.log('page change', x));
    this.editMode$ = this.store.select(getEditMode);
  }

  itemAdded(order: number): void {
    this.store.dispatch(addItem({ pageId: this.pageId ?? '', order }));
  }
}
