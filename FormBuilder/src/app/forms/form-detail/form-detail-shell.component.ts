import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormDetail } from '../forms.entities';
import { setSelectedForm } from '../state/forms.actions';
import { FormsFeature, getCurrentForm } from '../state/forms.selectors';

@Component({
  selector: 'app-form-detail-shell',
  templateUrl: './form-detail-shell.component.html'
})
export class FormDetailShellComponent implements OnInit {
  form$: Observable<FormDetail | null>;

  constructor(route: ActivatedRoute, store: Store<FormsFeature>) {
    const id = route.snapshot.params['id'];
    store.dispatch(setSelectedForm({ selectedFormId: id }));
    this.form$ = store.select(getCurrentForm);
  }

  ngOnInit(): void {
  }
}
