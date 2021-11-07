import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Page } from '../forms.entities';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDetailComponent implements OnInit {
  @Input() formName: string | undefined;
  @Input() pageList: Page[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    console.log(`Rendering form: ${this.formName}`);
  }
}
