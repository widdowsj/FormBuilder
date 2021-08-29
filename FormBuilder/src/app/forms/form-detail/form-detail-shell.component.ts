import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormDetail, Page } from '../forms.entities';
import { setSelectedForm } from '../state/forms.actions';
import { FormsFeature, getCurrentForm, getPageList } from '../state/forms.selectors';

@Component({
  selector: 'app-form-detail-shell',
  templateUrl: './form-detail-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDetailShellComponent implements OnInit {
  form$: Observable<FormDetail | undefined>;
  pageList$: Observable<Page[] | undefined>;
  combined$: Observable<{ form: FormDetail, pageList: Page[] } | undefined>;

  constructor(route: ActivatedRoute, store: Store<FormsFeature>) {
    const id = route.snapshot.params.id;
    store.dispatch(setSelectedForm({ selectedFormId: id }));
    this.form$ = store.select(getCurrentForm);
    this.pageList$ = store.select(getPageList);
    this.combined$ = combineLatest([this.form$, this.pageList$])
      .pipe(map(([formDetail, pageList]) => {
        if (formDetail && pageList) {
          return { form: formDetail, pageList };
        }
        return undefined;
      }));
  }

  ngOnInit(): void {
  }
}
