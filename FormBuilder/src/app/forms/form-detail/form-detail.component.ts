import { Component, Input, OnInit } from '@angular/core';
import { FormDetail } from '../forms.entities';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent implements OnInit {
  @Input() form: FormDetail | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }
}
