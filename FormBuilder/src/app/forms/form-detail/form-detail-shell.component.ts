import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from '../forms.entities';
import { setSelectedForm } from '../state/forms.actions';
import { FormsFeature, getCurrentFormName, getPageList } from '../state/forms.selectors';

@Component({
  selector: 'app-form-detail-shell',
  templateUrl: './form-detail-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDetailShellComponent implements OnInit {
  combined$: Observable<{ formName: string, pageList: Page[] } | undefined>;

  constructor(route: ActivatedRoute, store: Store<FormsFeature>) {
    const id = route.snapshot.params['id'];
    store.dispatch(setSelectedForm({ selectedFormId: id }));
    const formName$ = store.select(getCurrentFormName);
    const pageList$ = store.select(getPageList);
    this.combined$ = combineLatest([formName$, pageList$])
      .pipe(map(([formName, pageList]) => {
        if (formName && pageList) {
          return { formName, pageList };
        }
        return undefined;
      }));
  }

  ngOnInit(): void {
  }
}
