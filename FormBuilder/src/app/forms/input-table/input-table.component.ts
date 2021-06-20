import { Component, Input, OnInit } from '@angular/core';
import { FieldType, FormField } from '../forms.entities';

@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html',
  styleUrls: ['./input-table.component.scss']
})
export class InputTableComponent implements OnInit {
  FieldType = FieldType;

  @Input() labelText = '';
  @Input() fields: FormField[] = [];

  dataSource = [{}];
  displayedColumns: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.fields.map(x => x.text);
  }

  getError(field: FormField): string {
    console.error(`Unknown input table type: ${field.type}`);

    return `Unknown input table type: ${field.type}`;
  }
}
