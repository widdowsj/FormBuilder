import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormItem, ItemType } from '../forms.entities';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  @Input() item: FormItem | undefined;
  @Input() isDisplayed: boolean | null = null;
  @Input() editMode: boolean | null = null;
  ItemType = ItemType;

  @Output() editItemEvent = new EventEmitter();
  @Output() deleteItemEvent = new EventEmitter();
  @Output() valueChangeEvent = new EventEmitter<string>();

  control = new FormControl();
  changeSubscription: Subscription;

  constructor() {
    this.changeSubscription = this.control.valueChanges.subscribe(x => this.onChange(x));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.changeSubscription.unsubscribe();
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

  onChange(value: any): void {
    if (this.item === undefined) {
      return;
    }
    let serialisedValue = JSON.stringify(value);
    if (this.item.questionType === ItemType.date) {
      serialisedValue = JSON.stringify(value.toISOString());
    } else if (this.item.questionType === ItemType.time) {
      serialisedValue = JSON.stringify(value.format('HH:mm'));
    }
    this.valueChangeEvent.emit(serialisedValue);
  }
}
