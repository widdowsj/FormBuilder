import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormItem, ItemType } from '../forms.entities';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: FormItem | null = null;
  ItemType = ItemType;

  control = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
