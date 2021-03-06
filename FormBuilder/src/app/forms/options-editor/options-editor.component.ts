import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { FormOption } from '../forms.entities';

@Component({
  selector: 'app-options-editor',
  templateUrl: './options-editor.component.html',
  styleUrls: ['./options-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OptionsEditorComponent),
      multi: true
    }]
})
export class OptionsEditorComponent implements OnInit, ControlValueAccessor {
  optionColumns = ['value', 'text', 'editButtons'];

  options: EditableFormOption[] = [];
  dragDisabled = true;

  private onChange: ((_: any) => void) = () => { };
  private onTouched: any;

  constructor() { }

  @Input()
  get value(): FormOption[] {
    return this.options;
  }
  set value(val: FormOption[]) {
    this.options = val.map((x, i) => ({ ...x, id: uuidv4(), order: i }));
    this.onChange(val);
  }

  writeValue(obj: FormOption[]): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

  valueChange(id: string, eventTarget: EventTarget | null): void {
    const target = (eventTarget as HTMLInputElement);
    this.value = this.options.map(x => {
      if (x.id === id) {
        x.value = target.value;
      }
      return x;
    });
  }

  textChange(id: string, eventTarget: EventTarget | null): void {
    const target = (eventTarget as HTMLInputElement);
    this.value = this.options.map(x => {
      if (x.id === id) {
        x.text = target.value;
      }
      return x;
    });
  }

  addItem(): void {
    this.value = [...this.options, { value: '', text: '', order: 0 }];
  }

  deleteItem(value: string): void {
    this.value = this.options.filter(x => x.value !== value);
  }

  drop(event: CdkDragDrop<any[]>) {
    // Return the drag container to disabled.
    this.dragDisabled = true;

    moveItemInArray(this.options, event.previousIndex, event.currentIndex);
    this.value = this.options;
  }
}

export interface EditableFormOption extends FormOption {
  id: string;
}
