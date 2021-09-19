import { Component, Input, OnInit } from '@angular/core';
import { FormOption } from '../forms.entities';

@Component({
  selector: 'app-options-editor',
  templateUrl: './options-editor.component.html',
  styleUrls: ['./options-editor.component.scss']
})
export class OptionsEditorComponent implements OnInit {
  optionColumns = ['value', 'text', 'editButtons'];

  @Input() options: FormOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(value: string): void {
    this.options = this.options.filter(x => x.value !== value);
  }
}
