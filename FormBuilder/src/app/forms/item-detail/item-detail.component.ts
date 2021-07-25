import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormItem, ItemType } from '../forms.entities';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailComponent implements OnInit {
  @Input() item: FormItem | undefined;
  @Input() editMode: boolean | null = null;
  ItemType = ItemType;

  @Output() editItemEvent = new EventEmitter();
  @Output() deleteItemEvent = new EventEmitter();

  control = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  getError(): string {
    console.error(`Item Type not found ${this.item?.questionType}`);

    return `Item Type not found (${this.item?.isFormField ? '' : 'non-'}form field): ${this.item?.questionType}! Description: ${this.item?.description}`;
  }

  editItem(): void {
    this.editItemEvent.emit();
  }

  deleteItem(): void {
    this.deleteItemEvent.emit();
  }
}
