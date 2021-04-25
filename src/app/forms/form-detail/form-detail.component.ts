import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormDetail } from '../forms.entities';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent implements OnInit {
  form$: Observable<FormDetail>;

  constructor(formsService: FormsService, route: ActivatedRoute) {
    const id = route.snapshot.params['id'];
    this.form$ = formsService.getFormDetail(id!);
  }

  ngOnInit(): void {
  }

}
