import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormItem, ItemType } from '../forms.entities';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailComponent implements OnInit {
  @Input() item: FormItem | null = null;
  @Input() editMode = true;
  ItemType = ItemType;

  control = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  getError(): string {
    console.error(`Item Type not found ${this.item?.questionType}`);

    return `Item Type not found (${this.item?.isFormField ? '' : 'non-'}form field): ${this.item?.questionType}! Description: ${this.item?.description}`;
  }
}
