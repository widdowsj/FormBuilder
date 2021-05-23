import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormMetaData } from '../forms.entities';
import { getForms } from '../state/forms.actions';
import { FormsFeature, getFormList } from '../state/forms.selectors';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
  forms$: Observable<FormMetaData[]>;
  displayedColumns = ['id', 'name', 'version', 'isPublished', 'type'];

  constructor(store: Store<FormsFeature>) {
    store.dispatch(getForms());
    this.forms$ = store.select(getFormList);
  }

  ngOnInit(): void {
  }

}
