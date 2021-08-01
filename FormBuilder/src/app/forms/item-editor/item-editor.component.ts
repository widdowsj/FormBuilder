import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormItem, ItemType } from '../forms.entities';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit {
  questionTypes = Object.values(ItemType).sort();
  item: FormItem;

  constructor(@Inject(MAT_DIALOG_DATA) data: { item: FormItem }) {
    this.item = data.item;
  }

  ngOnInit(): void {
  }

}
