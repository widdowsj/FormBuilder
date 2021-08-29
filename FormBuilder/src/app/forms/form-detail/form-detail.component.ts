import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormDetail, Page } from '../forms.entities';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDetailComponent implements OnInit {
  @Input() form: FormDetail | undefined;
  @Input() pageList: Page[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    console.log(`Rendering form: ${this.form?.name}`);
  }
}
