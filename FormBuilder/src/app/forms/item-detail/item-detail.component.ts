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
  @Input() editMode: boolean | null = null;
  ItemType = ItemType;

  @Output() editItemEvent = new EventEmitter();
  @Output() deleteItemEvent = new EventEmitter();
  @Output() valueChangeEvent = new EventEmitter<any>();

  control = new FormControl();
  changeSubscription: Subscription;

  constructor() {
    this.changeSubscription = this.control.valueChanges.subscribe(x => this.valueChangeEvent.emit(x));
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
}
