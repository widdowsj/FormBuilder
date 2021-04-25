import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormMetaData, FormsService } from '../forms.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
  forms$: Observable<FormMetaData[]>;
  displayedColumns = ['id', 'name', 'version', 'isPublished', 'type'];

  constructor(formsService: FormsService) {
    this.forms$ = formsService.getForms();
  }

  ngOnInit(): void {
  }

}
